const mongoose = require('mongoose');
const dns = require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);


mongoose.connect('mongodb+srv://nikammonali2105_db_user:monalinikam123@cluster0.3rvoqub.mongodb.net/').then((res)=>{
    console.log("Database Connected Successfully");
}).catch(err=>{
    console.log("Something Error",err);
})