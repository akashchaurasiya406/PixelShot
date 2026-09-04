const express=require("express")
const multer=require('multer')
const uploadFile=require("./services/storage.service");
const postModel=require("./models/post.model")
const cors=require("cors")


const app=express();
app.use(cors())
app.use(express.json());


const upload=multer({storage:multer.memoryStorage()})        
// multer is middleware help to handle multi form data and it passes that data 

app.post("/create-post",upload.single("image"),async(req,res)=>{

    // console.log(req.body)               // give undefined as we are using express as middleware
                                           // which only help in reading raw date 
                                           // so we require different middleware 
                                           // named as multer 
    // after using multer
    console.log(req.body)
    console.log(req.file)
    // console.log(typeof req.file.buffer);                // it will shows object 
    const result=await uploadFile(req.file.buffer)
    // console.log(result)
    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post is created successfully",
        post
    })
})


app.get('/posts',async(req,res)=>{
    const posts=await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})


module.exports=app