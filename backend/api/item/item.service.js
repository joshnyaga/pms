const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO prescription_item( prescription_id, medicine_name,prescription_quantity, instructions_to_customers, date_of_expiry, hospital_id) VALUES (?,?,?,?,?,?)`,
            [
                data.pid,
                data.medicineName,
                data.quantity,
                data.instructions,
                data.expiry,
                data.hid,
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
            `select * from prescription_item`,
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
            `select * from prescription_item where drug_id=?`,
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
            `UPDATE prescription_item SET prescription_id=?,medicine_name=?,prescription_quantity=?, instructions_to_customers=?, date_of_expiry=?, hospital_id=? WHERE drug_id=?`,
            [
                data.pid,
                data.medicineName,
                data.quantity,
                data.instructions,
                data.expiry,
                data.hid,
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
            `delete from prescription_item where drug_id =?`,
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