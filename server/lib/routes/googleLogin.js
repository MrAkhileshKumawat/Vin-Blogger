const e = require("express");
const {googleAuth} = require("../passportStrategy/googleStrategy")
const UserServices = require("../services/users")
const userServices = new UserServices();
const jwt=require("jsonwebtoken");
const { restart } = require("nodemon");
const secret_key = process.env.JWT_SECRET_KEY

module.exports=((passport,googleLogin)=>{
    const googleStrategy = googleAuth(passport)

    googleLogin.get('/login/google',
    passport.authenticate('google', { scope:
        ['email','profile' ] }
    ));

    googleLogin.get('/auth/google',
        passport.authenticate('google', {failureRedirect: '/loginFailed'}),
            async function(req,res,next){
                const userDetails = req.user
                try {
                    let user = await userServices.googleLogin(userDetails)
                    // console.log("user",user)
                    if(user!="409" && user!=false){
                        var userData={
                            id:user.id,
                            email:user.email,
                            username:user.username
                        }
                        let token = jwt.sign(userData,secret_key)
                        // res.cookie("jwt",token)
                        res.json({message:"Login successfully"})
                        // res.redirect('http://localhost:3000' + `${token}`)
                    }else{
                        res.send("User already exists You can login with you password")
                    }
                } catch (error) {
                    console.log(error)
                    next(error)
                }
            })
    })
