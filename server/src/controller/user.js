const { create, getUser, getUserbyId, updateUser, deleteUser } = require("../service/user");

const bcrypt = require('bcrypt');

module.exports = {
    createUser: async (req, res) => {
        const body = req.body;
        body.password = await bcrypt.hash(body.password, 10);
        create(body, (err, results) => {
            if(err) {
                //console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connect error"
                })
            }
            console.log(body.password);
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUser: (req, res) => {
        getUser((err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    getUserbyId:(req, res) => {
        const id = req.params.id
        getUserbyId(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                //console.log(results);
                return res.json({
                    success: 0,
                    message: "not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateUser: async (req, res) => {
        const body = req.body;
        const id_user = req.params.id;
        body.password = await bcrypt.hash(body.password, 10);

        updateUser(id_user,body,(err, results)=>{
            if(err){
                //console.log(err);
                return res.status(500).json({
                    succes : 0,
                    message : "Internal Server Error"
                })
            }
            if(!results.affectedRows){
                return res.status(404).json({
                    succes : 1,
                    message : "not found"
                })
            }
            return res.status(200).json({
                success : 1,
                data : "update berhasil"
            })

        })
    },
    deleteUser:(req, res) => {
        id_user= req.params.id;
        deleteUser(id_user,(err,results) => {
            if(err){
                return res.status(500).json({
                    success : 0,
                    message : "database error"
                })
            }
            if(!results.affectedRows){
                return res.status(404).json({
                    success: 1,
                    message: "not found"
                })
            }
            return res.status(200).json({
                success:1,
                message: results
            })
        })
    }
}