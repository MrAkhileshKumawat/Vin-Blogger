var jwt = require("jsonwebtoken")
var secret_key = process.env.JWT_SECRET_KEY

function isverify(req,res,next){
    var token = (req.headers.cookie)
    if (token !== undefined ){
        var token = token.slice(4)

        jwt.verify(token,secret_key,(err,decode)=>{
            if(!err){
                next(decode)
            }else{
                console.log(err)
                res.sendStatus(401);
            }
        })
    }else{res.send({Error:"Login Please"})}
    
}

module.exports = isverify;