var jwt = require("jsonwebtoken")
var secret_key = process.env.JWT_SECRET_KEY

function isverify(req,res,next){
    let token = (req.headers.authorization)
    // console.log(token)

    if (token !== undefined ){
        // token = token.slice(4)
        // console.log('token',token)
        jwt.verify(token,secret_key,(err,decode)=>{
            if(!err){
                console.log("dfjkhjsad")
                next(decode)
            }else{
                console.log(decode)
                console.log(err)
                // res.sendStatus(401);
                next(err)
            }
        })
    }else{res.send({Error:"Login Please"})}
    
}

module.exports = isverify;