const express = require('express');
const app = express();
const knex = require('./lib/config/knex');
const passport = require("passport");
const { types } = require('pg');

app.use(express.json());
app.use(passport.initialize())


app.get('/', (req, res) => {
    res.send({"success": "welcome on the landing page!"});
})

app.get("/loginFailed",(req,res)=>{
    res.send("You profile is already exists So Login Please")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to our Our App!")
})

/* router controller  */
const controller = require("./lib/routes/controller")
app.use("/",controller)

app.use((req,res,next)=>{
    var error = new Error("Not found")
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    // console.log(error.status)
    error.statusCode = (error.status || 500 );
    res.json({
        message:error.message,
        type:error.type,
        statusCode:error.statusCode
    })
})

const PORT = process.env.PORT || 3030
app.listen(PORT, function() {
    console.log(`Server is running on PORT ${PORT} `);
})