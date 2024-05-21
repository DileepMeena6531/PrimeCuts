const express=require("express");
const mongoose=require("mongoose");
const app=express();

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log(e);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    app.listen(8080,(req,res)=>{
        console.log("listing port");
    })

}
