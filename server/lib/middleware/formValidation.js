
const e = require("express");
const User = require("../model/users");
const UserServices = require("../services/users")
const userServices = new UserServices();
async function formValidate (req, res , next) {
    const {name , username , email , password ,confirm_password} = req.body
    console.log(req.body)
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
            console.log("validate name");
        }else{res.json({error:"Invalid name",message:"Name contains only alphabets"})}
    }if(username!=undefined){
        if(await userServices.usernameValidator(username)){
            console.log("validate username");
        }else{res.json({error:"Invalid username",message:"length should be 1 to 20"})}
    }if(password!=undefined){
        if(await userServices.passwordValidate(password)){  
            console.log("validate password")
        }else{
            res.json({error:"Invalid password",message:"Password length should be 6 to 10"})
        }
    }
    next()
}

async function blogCreateValidation(req,res,next){
    const {title,article}=req.body
    if(title!=undefined && article!==undefined){
        let TITLE= title.trim()
        let STORY = article.trim()
        // console.log(title)
        if(TITLE.length>10 && STORY.length>20){
            next()
        }else{
            res.send("length should be greater than 20")
        }
    }else{
        res.send("Title and article are required")
    }

}
module.exports = {formValidate , loginValidate , profileUpdateValidation , blogCreateValidation}
