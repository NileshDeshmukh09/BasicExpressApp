const express = require('express');
const app = express();
const apiRouter = require("./routes/api/v1/index")
const PORT = 3000;

app.use('/api/v1', apiRouter)


  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on https://localhost:${PORT}`);
    else 
        console.log("Error occured, server can't start", error);
    }
);