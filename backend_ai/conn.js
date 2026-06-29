const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mern_ai').then((res)=>{
    console.log("Database Connected Successfully");
}).catch(err=>{
    console.log("Something Error",err);
})