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
        return await Blog.query()
        .withGraphFetched('users')
        .where("id",id)
    }

    async getBlogs(){
        return await Blog.query().withGraphFetched("users.['name']")
    }

    async search(query_string){
        return await Blog.query()
        .where('title','like','%' + query_string)
        .orWhere('title','like', query_string + '%')
        .orWhere('title','like','%'+ query_string + '%')
        .orWhere('title',query_string)
    }
}
module.exports = BlogServices;