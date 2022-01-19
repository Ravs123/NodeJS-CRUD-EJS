const express =require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
// const Blog=require('./model/blogSchema');
const { render } = require('ejs');

const blogRoutes=require('./routes/blogRoute')


//express app 
const app=express();

//Connect to mongodb
const dbURI='mongodb+srv://rajninja:ninja123@ninja.kwbfa.mongodb.net/blogs?retryWrites=true&w=majority'

mongoose.connect(dbURI)
    // .then((result)=>console.log('connected to the DB'))
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err))

//register view engin 'ejs'
app.set('view engine', 'ejs');//here we are implementing the view engine
app.set('views','files');//here we are locating the folder throught which ejs access out template file 

//3rd party middleware 'Morgan' and static files(CSS, images)
app.use(express.static('public')) 
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


//home page (Creating Routes)
app.get('/',(req,res)=>{
    // const blogsdata=[
    //     {title:"This is health", snipped:"eat good food"},
    //     {title:"This is happy life", snipped:"live your fullest"},
    //     {title:"This is consistency", snipped:" master it "}
    // ]
    // res.render('index',{title:'Home', blogs:blogsdata})
    res.redirect('/blogs')
})
//about 
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

//blog routes
app.use(blogRoutes)
// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({createdAt : -1})
//         .then(result=>{
//             res.render('index',{title:'All Blogs',blogs:result})
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// })

// app.post('/blogs',(req,res)=>{
//     // console.log(req.body)

//     const blogData = new Blog(req.body)
//     blogData.save()
//         .then(result=>{
//             res.redirect('/blogs')
//         }).catch(err=>{
//             console.log(err)
//         })

    
// })

// app.get('/blogs/:id',(req,res)=>{
//     const dataId=req.params.id
//     Blog.findById(dataId)
//         .then(result=>{
//             res.render('details',{databyId:result,title:'blogdata'})
//         }).catch(err=>{
//             console.log(err)
//         })
// })

// app.delete('/blogs/:id',(req,res)=>{
//     const deleteId=req.params.id
//     Blog.findByIdAndDelete(deleteId)
//     .then(result=>{
//         res.json({redirect:'/blogs'})
//     }).catch(err=>{
//         console.log(err)
//     })
// })


// app.get('/blog/create',(req,res)=>{
//     res.render('createBlog',{title:'Create Blog'})
// })


//404 err
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})
//here we are finishing the course 

// app.listen(3000);
