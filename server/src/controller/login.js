const { login } = require("../service/login");

const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    login: (req, res) => {
        const body = req.body;
        login(body.username, async (err, results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.status(404).json({
                    success: 1,
                    message: " not found "
                })
            }
            //console.log(body.password,results.password);

            const result = await bcrypt.compare(body.password, results.password);
            //console.log(result);
            //console.log(results);
            if(result){
                results.password = undefined;
                const jsontoken = sign({result: results}, "qwert123", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    token : jsontoken
                });
            }
            return res.json({
                success:0,
                resul: result,
                message: "password salah"
            })
        })
    }
}