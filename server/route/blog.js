const express = require('express')
const router = express.Router()
const {create,getAllBlogs,sigleBlog,remove,update} = require('../controller/blogController')




router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',sigleBlog)
router.delete('/blog/:slug',remove)
router.put('/blog/:slug',update)
module.exports = router