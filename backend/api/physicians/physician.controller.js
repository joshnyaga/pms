const {create, getAll, update,getById,del} =require("./physician.service");

module.exports= {
    createPhysician: (req,res,next)=>{
        const body = req.body;
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:false,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:true,
                data: results
            })
        })
    },
    getPhysicians:(req,res)=>{
        getAll((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:true,
                data:results
            })
        })
    },
    getPhysicianById: (req,res)=>{
        const id=req.params.id; 
        getById(id, (err,results)=>{
            if(err){
                console.log(err);
                return 
            }
            if(!results){
                return res.json({
                    success:false,
                    message: "Record not found"
                });
            }
            return res.json({
                success:true,
                data:results
            })
        })

    },
    updatePhysician:(req,res)=>{
        const body = req.body;
        update(body,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:false,
                message:"updated successfully"
            })
        })
    },
    deletePhysician: (req,res)=>{
        const id=req.params.id; 
        getById(id, (err,results)=>{
            if(err){
                console.log(err);
                return 
            }
            if(!results){
                return res.json({
                    success:false,
                    message: "Record not found"
                });
            }else{
                del(id, (err,results)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    
                    return res.json({
                        success:true,
                        message: "Physician deleted successfully"
                    })
            })
            }
        })
        
    },
    
}