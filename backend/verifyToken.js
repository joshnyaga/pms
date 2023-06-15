const jwt = require("jsonwebtoken");
const verifyToken = (req,res, next)=>{
    const token = req.cookies.access_token;
    console.log(token)
    if(!token) {
        return res.status(401).json({
            "success":false,
            "message":"You are not logged in"
        })
    }
    jwt.verify(token, process.env.KEY, (err,user)=>{
        if(err) {
            return res.status(403).json({
                "success":false,
                "message":"Your session has expired"
            })
        }
        req.user = user.result;
        next();
    });
};
const verifyTokenAdmin = (req,res, next)=>{
    const token = req.cookies.access_token;
    console.log(req.cookies)
    if(!token) {
        return res.status(401).json({
            "success":false,
            "message":"You are not logged in"
        })
    }
    jwt.verify(token, process.env.KEY, (err,user)=>{
        if(err) {
            return res.status(403).json({
                "success":false,
                "message":"Your session has expired"
            })
        }else if(user.result.type != "ADMIN"){
            return res.status(403).json({
                "success":false,
                "message":"You are not an admin"
            })
        }
        req.user = user.result;
        next();
    });
}
module.exports = {verifyToken, verifyTokenAdmin};