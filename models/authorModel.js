const mongoose = require('mongoose');
const schema = mongoose.Schema;

const authorSchema = new schema({
    name:
    {
        type:String
    },
    country:{
        type:String
    },
    age:{
        type:Number
    },
    dateofBirth:{
        type:Date
    }
},{timestamps:true})

const author = module.exports = mongoose.model('Author' , authorSchema);

