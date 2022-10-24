const slugify = require('slugify')
//connect db
const Blogs = require('../models/blog')


exports.create = (req,res)=>{
    const {title,content,author} = req.body
    const slug = slugify(title)


    //validate
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
