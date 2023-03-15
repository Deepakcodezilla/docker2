const  mongoose  = require('mongoose');
const Book = require('../models/bookModel');

const postBooks = async (req , res)=>{
    const bookData = new Book({
        name : req.body.name,
        author : req.body.author,
        numberofpages: req.body.numberofpages,
        summary : req.body.summary
    })
    try {
        const finalData = await bookData.save()
        console.log("finalData" , finalData);
        res.send({
            "ResponseCode":200,
            "ResponseMessage" : "Books added..",
            "ResponseResults" : finalData
        })
    } catch (error) {
       console.log("Error" , error.message) 
    }
}

const getbookByID = async( req, res)=>{
    // const paramsData = req.params._id
    // const getData = await Book.findById(paramsData)
    // if(paramsData){
        try {
            const finalData = await Book.aggregate([
                {
                    $lookup:{
                        from:'authors',
                        as:'author',
                        let:{book_id :"$_id"},
                        pipeline:[
                            {$match :{$expr:{$eq:['$book_id','$book_id']}}}
                        ]
                    }
                },
                {
                    $project:{
                        _id:0,
                        name:1,
                        summary:1,
                        author:{
                            name:1,
                            country:1
                        }
                    }
                },
                {
                    $unwind : "$author"
                }
            ])
            console.log("finalData" ,finalData);
            res.send({
                "ResponseCode":200,
                "ResponseMessage" : "Find book by Id..",
                "ResponseResults" : finalData[0]
            })
        } catch (error) {
            console.log("Error" , error.message);
        }
    }
    


module.exports = {postBooks ,getbookByID};