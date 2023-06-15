const pool = require("../../config/database");

module.exports = {
    create:(data, callBack)=>{
        pool.query(
            `INSERT INTO physician( physician_name, physician_details,hospital_id) VALUES (?,?,?)`,
            [
                data.name,
                data.physician_details,
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
            `SELECT physician_id, physician_name, physician_details, (SELECT hospital_name from hospital_details where hospital_id = physician.hospital_id) as hospital_name FROM physician;`,
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
            `select * from physician where physician_id=?`,
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
            `UPDATE physician SET physician_name=?,physician_details=?,hospital_id=?WHERE hospital_id=?`,
            [
                data.name,
                data.physician_details,
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
            `delete from physician where physician_id =?`,
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