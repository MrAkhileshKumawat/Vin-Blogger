const Blog = require("../model/blogs")
const Blogs = require("../model/blogs")
class BlogServices{
    async create(decode,data){
        data.users_id = decode.id
        return await Blogs.query().insertGraph(data)
    }


    async getAllBlogs(){
        return await Blogs.query().orderBy("created_at",'desc')
    }

    async getLimitedBlogs(limit){
        return await Blog.query().orderBy("created_at","desc").limit(limit)
    }

    async getBlogById(id){
        return await Blog.query().where("id",id)
    }
}
module.exports = BlogServices;