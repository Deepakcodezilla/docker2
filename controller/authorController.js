const Author = require('../models/authorModel');

const postAuthor = async (req , res)=>{
    const auhtorData = new Author({
        name : req.body.name,
        country : req.body.country,
        age: req.body.age,
        dateofBirth : req.body.dateofBirth
    })
    try {
        const finalData = await auhtorData.save()
        console.log("finalData" , finalData);
        res.send({
            "ResponseCode":200,
            "ResponseMessage" : "Author added..",
            "ResponseResults" : finalData
        })
    } catch (error) {
       console.log("Error" , error.message) 
    }

}
module.exports = postAuthor;