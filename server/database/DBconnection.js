import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTORENT"
    })
    .then(()=>{
        console.log("connected to database sucessfully!")
    })
    .catch(error=>{
        console.log(`Some error occured while connecting to database! ${error}`)
    })
};