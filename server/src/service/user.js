const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into user(username, password, firstname, lastname) values (?,?,?,?)`,
            [
                data.username,
                data.password,
                data.firstname,
                data.lastname
            ],
            (error, result, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        )
    },
    getUser: callback => {
        pool.query(
            `select * from user`,
            [],
            (error, result, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, result);
            })
    },
    getUserbyId: (user_id, callback) => {
        pool.query(
            `select * from user where user_id = ?`,
            [user_id],
            (error, result) => {
                if(error){
                    return callback(error);
                }
                console.log(result)
                return callback(null,result);
            }
        )
    },

    updateUser: (id_user,data, callback) => {
        pool.query(
            `update user set password=?, firstname=?, lastname=? where user_id=?`,
            [data.password,
            data.firstname,
            data.lastname,
            id_user],
            (error, result) => {
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    },
    deleteUser: (id_user, callback) => {
        pool.query(
            `delete from user where user_id =?`,
            [id_user],
            (error, result) => {
                if(error){
                    return callback(error);
                }
                return callback(null,result);
            }
        )
    }
}