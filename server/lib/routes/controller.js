const {Router} = require("express")
const router = Router();
const knex = require("../config/knex")
const passport = require("passport")
const User = require("../model/users") // userModel
const jwt = require("jsonwebtoken")
const isverify = require("../middleware/auth")



/* google login users */

require("./googleLogin")(passport,router)

/* users who create account mannualy */ 

require("./users")(router,jwt,isverify)


// require("./blogs")(router,isverify)


module.exports = router
