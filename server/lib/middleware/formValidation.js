
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
                    }else{res.json({message:"password doesn't match",note:"confirm password should be same as password"})}
                }else{res.json({message:"Invalid password",note:"Password length should be 6 to 10"})}
            }else{res.json({message:"Invalid email",note:"email length should be less then 30"})}
        }else{res.json({message:"Invalid username",note:"length should be 1 to 20 "})}
    }else{res.json({message:"Invalid name",note:"Name contains only alphabets"})}
}


async function loginValidate(req,res,next){
    const {emailOrUsername,password}=req.body
    if(emailOrUsername!=undefined){
        if(password!=undefined && password!=""){
            next()
        }else{res.json({message:"Password is required"})}
    }else{
        res.json({message:"email or username required for login"})
    }
}



async function profileUpdateValidation(req,res,next){
    const {name,username,password} = req.body
    if(name!=undefined){
        if(await userServices.nameValidate(name)){
            console.log("validate name");
        }else{res.json({message:"Invalid name",note:"Name contains only alphabets"})}
    }if(username!=undefined){
        if(await userServices.usernameValidator(username)){
            console.log("validate username");
        }else{res.json({message:"Invalid username",note:"length should be 1 to 20"})}
    }if(password!=undefined){
        if(await userServices.passwordValidate(password)){  
            console.log("validate password")
        }else{
            res.json({message:"Invalid password",note:"Password length should be 6 to 10"})
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
            res.json({message:"length should be greater than 20"})
        }
    }else{
        res.json({message:"Title and article are required"})
    }

}
module.exports = {formValidate , loginValidate , profileUpdateValidation , blogCreateValidation}
