const mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookSchema = new schema({
    name:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Author"
    },
    numberofpages:{
        type:Number
    },
    summary:{
        type:String
    }
},{timeStamps:true})

const book = module.exports = mongoose.model("Books" , bookSchema);