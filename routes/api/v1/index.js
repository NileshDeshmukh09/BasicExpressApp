const express  = require("express");
const router = express.Router();

function dummyController(req, res){
    return  res.send({ message: "Working Fine"});
}

router.get("/test", dummyController);

module.exports = router;