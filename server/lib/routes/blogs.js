const { nextTick } = require("process")
const { tryPromise } = require("tarn/dist/utils")
const { blogCreateValidation } = require("../middleware/formValidation")
const BlogServices = require("../services/blogs")
const BlogsServices= require("../services/blogs")
const blogServices = new BlogsServices()
module.exports = (blog,isverify,blogValidation)=>{
    blog.post("/post/blog",blogCreateValidation,isverify,async(decode,req,res,next)=>{
        try {
            if(await blogServices.create(decode,req.body)){
                res.send("Blog Created Successfully")
            }
        } catch (error) {
            next(error)
        }
           
    })

    blog.get("/blogs",async(req,res)=>{
        let blogs=await blogServices.getLimitedBlogs(5)
        res.send(blogs)
    })

    blog.get("/blog/:id",isverify,async(req,res)=>{
        let blog = await blogServices.getBlogById(req.params.id)
        if(blog==true || blog.length){
            res.send(blog)
        }else{
            res.send("YOu haven't create any blog")
        }
    })
}