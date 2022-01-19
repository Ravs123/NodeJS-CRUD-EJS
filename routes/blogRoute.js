const express=require('express')
const Blog=require('../model/blogSchema');

//creating Router
const router=express.Router();


//routes 
router.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1})
        .then(result=>{
            res.render('index',{title:'All Blogs',blogs:result})
        })
        .catch(err=>{
            console.log(err)
        })
})

router.post('/blogs',(req,res)=>{
    // console.log(req.body)

    const blogData = new Blog(req.body)
    blogData.save()
        .then(result=>{
            res.redirect('/blogs')
        }).catch(err=>{
            console.log(err)
        })

    
})

router.get('/blog/create',(req,res)=>{
    res.render('createBlog',{title:'Create Blog'})
})

router.get('/blogs/:id',(req,res)=>{
    const dataId=req.params.id
    Blog.findById(dataId)
        .then(result=>{
            res.render('details',{databyId:result,title:'blogdata'})
        }).catch(err=>{
            console.log(err)
        })
})

router.delete('/blogs/:id',(req,res)=>{
    const deleteId=req.params.id
    Blog.findByIdAndDelete(deleteId)
    .then(result=>{
        res.json({redirect:'/blogs'})
    }).catch(err=>{
        console.log(err)
    })
})


// router.get('/blog/create',(req,res)=>{
//     res.render('createBlog',{title:'Create Blog'})
// })

module.exports=router