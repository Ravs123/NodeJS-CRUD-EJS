const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const blogSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    snipped:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

},{timestamps:true})

//Here we are creating the model and assign a name to the model and the name of this model is "Blog" and applying the schem to the model i.e.. 'blogSchema'
const NinjaBlog = mongoose.model('Blog',blogSchema)
module.exports=NinjaBlog//here we are exporting the mode with a method called 'module.export'
