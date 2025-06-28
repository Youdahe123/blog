import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose, { model } from 'mongoose';
import { type } from 'os';
dotenv.config({path:'/Users/asfawy/blog/mainBlog/src/data/.env'})

const app = express();
const mongoURL = process.env.MONGO_URL
const PORT = 3000;

app.use(cors())
app.use(express.json())

const postSchema = new mongoose.Schema({
        id:Number,
        title:String,
        content:String,
        date: {type:Date,default:Date.now}

    })

    const postModel = mongoose.model('posts',postSchema)
mongoose.connect(mongoURL)
    .then(async()=>{
        console.log("Database Connected Sucessfully!")
    
    }).catch(err=>{console.log(`Database Connection Error :${err}`)});




app.get('/',async (req,res)=>{
    try{
        const posts = await postModel.find()
        res.json(posts)
    }catch(err){
        res.status(500).json({error:"Failed to Load"})
    }
})

const messeageSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    created_at:{type:Date,default:Date.now()}
})

const MessageModel = mongoose.model('messages',messeageSchema)

app.post('/messege',async(req,res)=>{
    console.log(req.body)
    const {name,email,message} = req.body

    if(!name || !email||!message){
        return res.status(400).json({err:"Error Missing either name email or message "})
    }
    try{
        const newMessage = new MessageModel({name,email,message})
        await newMessage.save()
        res.status(201).json({sucess:true})
    }catch(err){res.status(500).json({err:"failed to save message"})}

})

app.listen(PORT,()=>{
    console.log(`${PORT} IS ACTIVE`)
})