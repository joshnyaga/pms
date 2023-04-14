const {create, getAll, update,getById,del} =require("./item.service");

module.exports= {
    createItem: (req,res,next)=>{
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
    getItems:(req,res)=>{
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
    getItemById: (req,res)=>{
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
    updateItem:(req,res)=>{
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
    deleteItem: (req,res)=>{
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
                        message: "Item deleted successfully"
                    })
            })
            }
        })
        
    },
    
}