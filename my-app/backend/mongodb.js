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
        fetch_data.find({}).toArray(async function(err, data){
            const catogeries = await mongoose.connection.db.collection("categories");
            catogeries.find({}).toArray(async function(err,data2){
                if(err){console.log("error---" ,err)}
                else{
                    global.sampledb = data;
                    global.categories = data2;
                    // console.log(global.sampledb , global.categories);
                }
            });

              
        })
    });
}

module.exports = mongodb;