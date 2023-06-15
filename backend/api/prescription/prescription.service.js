const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO prescription( customer_id, pharmacist_id,prescription_issue_date, prescription_filled_date) VALUES (?,?,?,?)`,
            [
                data.cid,
                data.pid,
                data.issueDate,
                data.filledDate,
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
            `SELECT prescription_id, (SELECT pharmacist_name from pharmacist where pharmacist_id = prescription.pharmacist_id) as pharmacist, prescription_issue_date, prescription_filled_date FROM prescription WHERE customer_id=?;`,
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
            `select * from prescription where prescription_id=?`,
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
            `UPDATE prescription SET customer_id=?,pharmacist_id=?,prescription_issue_date=?, prescription_filled_date=? WHERE prescription_id=?`,
            [
                data.cid,
                data.pid,
                data.issueDate,
                data.filledDate,
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
            `delete from prescription where prescription_id =?`,
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