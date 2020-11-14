const formValidate = require("../middleware/formValidation").formValidate;
const loginValidate = require("../middleware/formValidation").loginValidate;
const { profileUpdateValidation } = require("../middleware/formValidation");
const User = require("../model/users");
const UserServices = require("../services/users")
const userServices = new UserServices();
const secret_key = process.env.JWT_SECRET_KEY

module.exports =(users,jwt,isverify)=>{
    users.get("/account",(req,res)=>{
        res.send("Welcome to your Profile")
    })

    users.get("/users",async(req,res)=>{
        try {
            const Users = await userServices.fetchAllUsers()
            res.send(Users)
        } catch (error) {
            next(error)
        }
    })

    users.post("/signup",formValidate,async(req,res,next)=>{
        try {
            let details = req.body
            if(await userServices.isExsitsUsername(req.body.username)){
                next(error = new Error("Username already taken"))
            }else{
                delete details.confirm_password
                let user = await userServices.findOrCreate(details)
                // console.log("error",user)
                if(user){
                    res.send({success:"User Inserted Successfully"})
                }else{
                    next(error =new Error("User Alredy Exists",409),error.status=409)                        
                }
            }   
        } catch (error) {
            console.log("error" ,error)
            next(error)
        }
    })

    users.post("/login",loginValidate,async(req,res,next)=>{
        try {
            const userDetails = await userServices.setDefault(req.body)
            // console.log("user",userDetails)
            let user = await userServices.checkUserLogin(userDetails)
            // console.log(user)
            if(user!="409" && user!=false){
                // console.log(user)
                user = user[0]
                var userData={
                        id:user.id,
                        username:user.username,
                        email:user.email
                    }
                    // console.log(userData)
                    let token = jwt.sign(userData,secret_key)
                    res.cookie("jwt",token)
                    res.send("Login Successfully")
            }else if(user=="409"){
                next(error = new Error("Invalid Password"),error.status=409)
            }else{
                next(error = new Error("User Not Found"),error.status = 404)
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

    users.put("/profile",profileUpdateValidation,isverify,async(decode,req,res,next)=>{
        var detail = await userServices.find({"email":decode.email})
        if (detail!=undefined && detail.length !== 0){
            if(req.body.email==undefined){
                await userServices.update(decode.email,req.body)
                res.send("Profile Updated!")
            }else{
                res.send("You Can't change email")
            }
        }else{
            res.send("Profile Not Found !")
        }
    })
}