const mongoose = require('mongoose');

const url = "mongodb+srv://hasrh9466438:harshjindall@cluster0.jkgo8ij.mongodb.net/?retryWrites=true&w=majority";

const mongodb = async () => {
    // await mongoose.connect(url , (err, db) => {
    //     if(err){
    //         console.log("error---" , err);
    //     }
    //     else{
    //         console.log("connect sucessfully");
    //     }
    // })
    console.log("harsh");
    await mongoose.connect(url ,()=>{
        console.log("connect succesfully");
    });
}

module.exports = mongodb;