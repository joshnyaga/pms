const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO medicine_stock( medicine_name, details,quantity, expiry_date) VALUES (?,?,?,?)`,
            [
                data.name,
                data.details,
                data.quantity,
                data.expiry,
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
            `select * from medicine_stock`,
            [],
            (error,results, field)=>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getById:(id,callBack)=>{
        pool.query(
            `select * from medicine_stock where medicine_id=?`,
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
            `UPDATE medicine_stock SET medicine_name=?,details=?,quantity=?, expiry_date=? WHERE medicine_id=?`,
            [
                data.name,
                data.details,
                data.quantity,
                data.expiry,
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
            `delete from medicine_stock where medicine_id =?`,
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