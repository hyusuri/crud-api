const pool = require("../../config/database");

module.exports ={
    login : (username, callback) => {
        pool.query(
            `select * from user where username = ?`,
            [username],
            (error, result, field) => {
                if(error){
                    return callback(error);
                }
                //console.log(result);
                return callback(null, result[0])
            }
        );
    }
}