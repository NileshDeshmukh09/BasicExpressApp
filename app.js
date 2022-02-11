const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const apiRouter = require("./routes/api/v1/index")
const PORT = 3000;

//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false}))

// parse application /json
app.use(bodyParser.json())

app.use('/api/v1', apiRouter)


  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on https://localhost:${PORT}`);
    else 
        console.log("Error occured, server can't start", error);
    }
);