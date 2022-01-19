const express =require('express')
const app=express();

//home page 
app.get('/',(req,res)=>{
    res.sendFile('./files/index.html',{root:__dirname})
})
//about 
app.get('/about',(req,res)=>{
    res.sendFile('./files/about.html',{root:__dirname})
})
//redirect 
app.get('/about-us',(req,res)=>{
    res.sendFile('/about')
})

//404 err
app.get('/',(req,res)=>{
    res.sendFile('./files/home',{root:__dirname})
})


app.listen(3000);