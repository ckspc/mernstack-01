//ชื่อ (title), เนื้อหา(content),ผู้เขียน(author),slug(url)

const mongoose=require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Choke"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

module.exports=mongoose.model("Blogs",blogSchema)