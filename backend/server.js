require("dotenv").config()                   // always write at the top
const app=require("./src/app")
const connectDB=require("./src/DB/db")
// require("dotenv").config()                        // if we write here then it will give error
connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port:3000")
})

