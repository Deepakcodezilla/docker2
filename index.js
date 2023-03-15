const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes')
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://codezilladeepak:12345@cluster0.8sbtl10.mongodb.net/join',{useNewUrlParser:true}).then(() => console.log("Connect to mongodb.."))
.catch(err => console.log(err))

app.use('/' , bookRoutes);
app.use('/' , authorRoutes)

app.listen(6000 , (error)=>{
    if(error){
        return console.log("Error" , error);
    }
    console.log(`Server is started at port::${6000}`);
})