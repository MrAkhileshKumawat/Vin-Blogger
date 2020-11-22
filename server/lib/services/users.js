const User = require('../model/users');
const Blog = require("../model/blogs")
// const bcrypt = require('bcrypt');

module.exports = class UserServices{
    async insert(userDetails){
        const user = await User.query().insertGraph(userDetails)
        return user 
    }

    async find(userDetails){
        const user = await User.query().findOne(userDetails)
        return user
    }

    async fetchAllUsers(){
        const users = await User.query()
        return users
    }

    async update(email,userDetails){
        const user = await User.query().patch(userDetails).where("email",email)
        return user
    }

    
    async usernameGenerator(email){
        const name = email.match(/^([^@]*)@/)[1];
        var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        var uniqueId = '';
        var charactersLength = characters.length;
        for ( var i = 0; i<6; i++ ) {
          uniqueId += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        let username = name+"_"+uniqueId
        if(await this.isExsitsUsername(username)){
            return this.usernameGenerator(email)
        }else{
            console.log("new",username)
            return username
        }
    }

    async isExsitsUsername(username){
        return await User.query().findOne({"username":username})
    }


    async checkUserLogin(userDetails){
        let {email,username,password,provider}=userDetails
        const user = await User.query().select("*").where("email",email).orWhere({"username":username})
        if(user.length){
            if((email==user[0].email || username == user[0].username) && (password==user[0].password || user[0].provider==provider)){
                return user // found
            }else{
                return "409"
            }
        }else{
            return false
        }
    }

    async setDefault(userDetails){
        if(!("email" in userDetails)){
            userDetails["email"]=""
            return userDetails
        }else if(! ("username" in userDetails)){
            userDetails["username"]=""
            return userDetails
        }
    }
    
    async findOrCreate(userDetails){
        let user=await User.query().select("*").where("email",userDetails.email)
        if(user.length){
            return false
        }else{
            return await User.query().insertGraph(userDetails)
        }
    }

    async googleLogin(userDetails){
        userDetails.username = userDetails.email.split("@")[0]
        let user = await this.checkUserLogin(userDetails)
        if(user.length){
            console.log("Profile Updated")
            delete userDetails.username
            return await User.query().patch(userDetails).where("email",userDetails.email)
        }else{
            const username = await this.usernameGenerator(userDetails.email)
            userDetails.username = username
            userDetails.password = ""
            console.log("User Insert successfully")
            return await User.query().insertGraph(userDetails)
        }
    }

    async nameValidate(name) {
        console.log("name",name)
        let regexName = /^[a-zA-Z ]{2,30}$/;
        if(await name.match(regexName)){
            return true
        }else{
            return false
        }
    }

    async emailValidator(email){
        console.log(email)

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length<=30 && email.match(regexEmail)) {
            console.log("email",email)
            return true; 
        } else {
            return false; 
        }
    }

    async usernameValidator(username){
        let regexUsername = /^(?=[a-zA-Z0-9._]{1,20}$)[^_.].*[^_.]$/;
        if(username.match(regexUsername)){
            return true
        }else{
            return false
        }

    }

    async passwordValidate(password) {
        // let regexPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/;
        let regexPassword = /^(?=[a-zA-Z0-9._@]{6,10}$)/
        if(await password.match(regexPassword)){
            return true
        }else{
            return false
        }
    }

    async confirm_password(password,confirm_password){
        if(password==confirm_password){
            return true
        }else{
            false
        }
    }
    
}

