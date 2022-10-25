const slugify = require('slugify')
const blog = require('../models/blog')
//connect db
const Blogs = require('../models/blog')
const {v4:uuidv4} = require('uuid')

exports.create = (req,res)=>{
    const {title,content,author} = req.body
    let slug = slugify(title)


    //validate
    if(!slug)slug=uuidv4()
    switch(true){
        case !title:
            return res.status(400).json({err:"title error"})
            break;
        case !content:
            return res.status(400).json({err:"title content"})
            break;
    }
    // res.json({
    //     data:{title,content,author,slug}
    // })
    Blogs.create({title,content,author,slug},(err,blog)=>{
        if(err){
            res.status(400).json({err:err})
        }
        res.json(blog)
    })

}

exports.getAllBlogs=(req,res)=>{
    Blogs.find({}).exec((err,blogs)=>{
        res.json(blogs)
    })
}

exports.sigleBlog =(req,res)=>{
    const {slug}= req.params
    Blogs.findOne(({slug})).exec((err,blog)=>{
        res.json(blog)
    })
}

exports.remove=(req,res)=>{
    const {slug}= req.params
    Blogs.findOneAndDelete(({slug})).exec((err,blog)=>{
        res.json({
            message:"removed"
        })
    })
}

exports.update=(req,res)=>{
    const {slug} = req.params
    const {title,content,author}=req.body
    Blogs.findOneAndUpdate({slug},{title,content,author},{new:true}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json(blog)
    })
}
