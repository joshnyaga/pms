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
    getAll:(id,callback)=>{
        pool.query(
            `SELECT drug_id,  medicine_name, prescription_quantity as quantity, instructions_to_customers as instructions, date_of_expiry, (SELECT hospital_name from hospital_details where hospital_id=prescription_item.hospital_id) as hospital FROM  prescription_item WHERE prescription_id=?;`,
            [id],
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