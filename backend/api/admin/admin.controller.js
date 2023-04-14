const {create, updateUser, getUserByEmail} = require("./admin.service");
const {genSaltSync, hashSync, compareSync, compare}= require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports= {
    createUser: (req,res,next)=>{
        const body = req.body;
        const salt =genSaltSync(10);
        body.password = hashSync(body.password, salt);
        getUserByEmail(body.email, (err,results)=>{
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
                            message: err
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
    updateUsers:(req,res)=>{
        const body = req.body;
        const salt= genSaltSync(10);
        body.password= hashSync(body.password, salt);
        updateUser(body,(err,results)=>{
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
    login: (req,res,next)=>{
        const body = req.body;
        getUserByEmail(body.email,async (err,results)=>{
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
            const result = await compare(body.password, results.password)
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
    }
}