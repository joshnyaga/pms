const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO admin( username, email, password, type) VALUES (?,?,?,?)`,
            [
                data.username,
                data.email,
                data.password,
                "ADMIN"
            ],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getUserByEmail:(email,callBack)=>{
        pool.query(
            `select * from admin where email=?`,
            [email],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
    updateUser:(data, callBack)=>{
        pool.query(
            `UPDATE admin SET username=?,email=?,password=? WHERE admin_id=?`,
            [
                data.username,
                data.email,
                data.password,
                data.id
            ],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },


}