const { verify } = require("jsonwebtoken")

module.exports = {
    checkToken : (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token =  token.slice(7);
            verify(token, "qwert123", (err, decode)=>{
                if(err){
                    res.json({
                        succes: 0,
                        message: "invalid token"
                    })
                } else{
                    next();
                }
            })
        } else {
            res.json({
                succes: 0,
                message: "access authorization denied"
            })
        }
    }
}