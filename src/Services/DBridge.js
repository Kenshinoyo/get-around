import axios from "axios";
const GA_BASE_URL = "http://localhost:8080/ctapi";

class DBridge{

    getBlogs(){
        return axios.get(GA_BASE_URL+"/allblogs")
    }

    createBlogEntry(BlogEntry){
        return axios.post(GA_BASE_URL+"/addblog", BlogEntry);
    }

    getBlogById(id){
        return axios.get(GA_BASE_URL+"/blogentry/"+id);
    }

    updateBlogEntry(BlogEntry, id){
        return axios.put(GA_BASE_URL+"/blogentry/"+id, BlogEntry);
    }

    deleteBlogEntry(id){
        return axios.delete(GA_BASE_URL+"/blogEntry/"+id);
    }
}

export default new DBridge();