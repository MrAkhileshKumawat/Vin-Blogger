const e = require("express");
const {googleAuth} = require("../passportStrategy/googleStrategy")
const UserServices = require("../services/users")
const userServices = new UserServices();

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
                    let login = await userServices.googleLogin(userDetails)
                    // console.log("login",login)
                    if(login!="409" && login!=false){
                        res.redirect("/home")
                    }else{
                        res.send("User already exists You can login with you password")
                    }
                } catch (error) {
                    console.log(error)
                    next(error)
                }
            })
    })
