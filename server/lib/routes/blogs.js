const { nextTick } = require("process")
const { tryPromise } = require("tarn/dist/utils")
const { blogCreateValidation } = require("../middleware/formValidation")
const { query } = require("../model/users")
const BlogServices = require("../services/blogs")
const BlogsServices= require("../services/blogs")
const UserServices = require("../services/users")
const blogServices = new BlogsServices()
module.exports = (blog,isverify,blogValidation)=>{
    blog.post("/post/blog",blogCreateValidation,isverify,async(decode,req,res,next)=>{
        try {
            if(await blogServices.create(decode,req.body)){
                res.json({message:"Blog Created Successfully"})
            }
        } catch (error) {
            next(error)
        }
           
    })

    blog.get("/blogs",async(req,res)=>{
        let blogs=await blogServices.getAllBlogs()
        res.send(blogs)
    })

    blog.get("/blog/:id",isverify,async(decode,req,res,next)=>{
        try {
            let blog = await blogServices.getBlogById(req.params.id)
            let date = blog[0].created_at.toString().slice(4,15)
            console.log(blog)
            if(blog==true || blog.length){
                let Blog = {
                    id:blog[0].id,
                    title:blog[0].title,
                    article:blog[0].article,
                    date:date,
                    profile_name:blog[0].users.name,
                    profile_picture:blog[0].users.profile_picture
                }
                console.log(Blog)
                res.send(Blog)
            }else{
                res.status(404).json({message:"Blog Not Found"})
            }
        } catch (error) {
            console.log(error)
        }
        
    })


    blog.get("/blog",async(req,res)=>{
        res.send(await blogServices.getBlogs())
    })


    blog.get("/search/:search_word",async(req,res,next)=>{
        var query_string = req.params.search_word
        console.log("query",query_string)
        try {
            let query = await blogServices.search(query_string)
            console.log(query)
            res.send(query)
        } catch (error) {
            next(error)
        }
    })
}