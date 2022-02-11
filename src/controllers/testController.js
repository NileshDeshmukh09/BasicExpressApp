const testModel = require("../models/testModel");
function testingGet(req,res){
    res.send({ message : "Testing Get is working!"});
}

function testingPost( req ,res){
    let data = req.body;
    console.log(data , req.body);
    testModel.testModelFunction(data , function(err, result){
        if(err){
            console.log(err);
            return res.status(500).send({
                message: "Not Okay!"
            })
        }
        res.status(200).send({ message : " Testing Post is working!"})
    })
}

module.exports = { testingGet , testingPost}