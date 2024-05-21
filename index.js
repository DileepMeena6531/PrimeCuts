const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path=require("path");


main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log(e);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public"))); 

app.get("/",(req,res)=>{
    res.send("welcome to first route");
})

    app.listen(8080,(req,res)=>{
        console.log("listing port");
    })


