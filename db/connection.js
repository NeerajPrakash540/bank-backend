// define node app and mongodb database connectivity

// import mongoose in connection.js file
const mongoose = require('mongoose')
// to get connection string from .env file: process.env
const connectionString = process.env.DATABASE

// connect node app with mongodb using connection string with help of mongoose

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongodb Atlas connected successfully....");
}).catch(()=>{
    console.log("Mongodb connection error!!!");
})