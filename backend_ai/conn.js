const mongoose = require('mongoose');
require("dotenv").config();
const dns = require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);


mongoose.connect(process.env.MONGO_URI).then((res)=>{
    console.log("Database Connected Successfully");
}).catch(err=>{
    console.log("Something Error",err);
})