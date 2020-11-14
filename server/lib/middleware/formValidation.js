
const e = require("express");
const User = require("../model/users");
const UserServices = require("../services/users")
const userServices = new UserServices();
async function formValidate (req, res , next) {
    const {name , username , email , password ,confirm_password} = req.body
    if(await userServices.nameValidate(name)){
        if(await userServices.usernameValidator(username)){
            if(await userServices.emailValidator(email)){
                if(await userServices.passwordValidate(password)){
                    if(await userServices.confirm_password(password,confirm_password)){
                        next()
                    }else{res.json({error:"password doesn't match",message:"confirm password should be same as password"})}
                }else{res.json({error:"Invalid password",message:"Password length should be 6 to 10"})}
            }else{res.json({error:"Invalid email",message:"email length should be less then 30"})}
        }else{res.json({error:"Invalid username",message:"length should be 1 to 20 "})}
    }else{res.json({error:"Invalid name",message:"Name contains only alphabets"})}
}


async function loginValidate(req,res,next){
    const {username,email,password}=req.body
    if(username!=undefined){
        if(password!=undefined && password!=""){
            next()
        }else{res.send("Password is required")}
    }else{
        if(email!=undefined){
            if(password!=undefined && password!=""){
                next()
            }else{res.send("password is required")}
        }else{res.send("email or username required for login")}
    }
}



async function profileUpdateValidation(req,res,next){
    const {name,username,password} = req.body
    if(name!=undefined){
        if(await userServices.nameValidate(name)){
            console.log("name validate")
        }else{res.json({error:"Invalid name",message:"Name contains only alphabets"})}
    }else if(username!=undefined){
        if(await userServices.usernameValidator(username)){
            console.log("Username validate")
        }else{res.json({error:"Invalid username",message:"length should be 1 to 20"})}
    }else if(password!=undefined){
        if(await userServices.passwordValidate(password)){
            console.log("Password validate")
        }else{
            res.json({error:"Invalid password",message:"Password length should be 6 to 10"})
        }
    }
    next()
}
module.exports = {formValidate , loginValidate , profileUpdateValidation}

