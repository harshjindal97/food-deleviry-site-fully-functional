const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url = "mongodb+srv://hasrh9466438:harshjindall@cluster0.jkgo8ij.mongodb.net/nightfood?retryWrites=true&w=majority";

const mongodb = async () => {
    // await mongoose.connect(url , (err, db) => {
    //     if(err){
    //         console.log("error---" , err);
    //     }
    //     else{
    //         console.log("connect sucessfully");
    //     }
    // })
    // console.log("harsh");
    await mongoose.connect(url ,async ()=>{
        console.log("connect succesfully");
        const fetch_data = await mongoose.connection.db.collection("sampledb");
        fetch_data.find({}).toArray(function(err, data){
            if(err){console.log("error---" ,err)}
            // else{console.log(data)}
        })
    });
}

module.exports = mongodb;