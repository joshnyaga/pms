const {create,getByEmail, getAll, update,getById,del} =require("./pharmacist.service");
const {genSaltSync, hashSync, compare}= require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports= {
    createPharmacist: (req,res,next)=>{
        const body = req.body;
        const salt =genSaltSync(10);
        body.password = hashSync(body.password, salt);
        getByEmail(body.email, (err,results)=>{
            if(err){
                console.log(err);
                return 
            } 
            if(results){
                return res.json({
                    success:false,
                    message: "Email already exists"
                });
            }else{
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
            }
        })

    },
    getPharmacists:(req,res)=>{
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
    getPharmacistById: (req,res)=>{
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
    updatePharmacists:(req,res)=>{
        const body = req.body;
        const salt= genSaltSync(10);
        body.password= hashSync(body.password, salt);
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
    deletePharmacist: (req,res)=>{
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
                        message: "Pharmacist deleted successfully"
                    })
            })
            }
        })
        
    },
    login: (req,res,next)=>{
        const body = req.body;
        getByEmail(body.email,async (err,results)=>{
            if(err){
                console.log(err)
                return;
            }
            if(!results){
                return res.json({
                    success: false,
                    message: "Email does not exist"
                })
            }
            const result = await compare(body.password, results.pharmacist_password)
            if(result){
                result.password = undefined
                const jsonToken = sign({result: results}, process.env.KEY);
                return res.cookie("access_token", jsonToken,{
                    httpOnly:true,
                }).status(200).json(results)
              
            }else{
                return res.json({
                    success: false,
                    message: "Credentials matching your details does not exit",
                    data:results
                })
            }
        })
    },
    checkLogIn:(req,res)=>{
        const body = req.body;
        getByEmail(body.email,async (err,results)=>{
            if(err){
                console.log(err)
                return;
            }
            if(!results){
                return res.json({
                    success: false,
                    message: "You are not logged in",
                    status: 404
                })
            }
        })
    },
    logout:(req, res)=>{
        res.clearCookie("access_token");
        return res.json({
            success:true,
            message:"You have logged out"
        })
        
    
        
    },
    getPharmacist:(req,res)=>{
        return res.json({
            success:true,
            data:req.user
        })
    }
}