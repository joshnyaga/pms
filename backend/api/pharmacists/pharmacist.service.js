const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO pharmacist( pharmacist_name, pharmacist_email,pharmacist_details, pharmacist_password) VALUES (?,?,?,?)`,
            [
                data.username,
                data.email,
                data.password,
                data.details
            ],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getAll:(callback)=>{
        pool.query(
            `select * from pharmacist`,
            [],
            (error,results, field)=>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    getByEmail:(email,callBack)=>{
        pool.query(
            `select * from pharmacist where pharmacist_email=?`,
            [email],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
    getById:(id,callBack)=>{
        pool.query(
            `select * from pharmacist where pharmacist_id=?`,
            [id],
            (error,results,fields)=>{
                if(error){

                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
    update:(data, callBack)=>{
        pool.query(
            `UPDATE pharmacist SET pharmacist_name=?,pharmacist_email=?,pharmacist_details=?, pharmacist_password=? WHERE pharmacist_id=?`,
            [
                data.username,
                data.email,
                data.password,
                data.details,
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
    del:(id,callBack)=>{
        pool.query(
            `delete from pharmacist where pharmacist_id =?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }


}