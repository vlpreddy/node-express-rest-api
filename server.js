const express = require('express');
const dotEnv = require('dotenv');
const { urlencoded } = require('express');
const cors = require('cors');
const dbConnection = require('./database/connection');
dotEnv.config();


const app = express();

// Database connection


// cors
app.use(cors());
app.use(express.json());

dbConnection();
     
app.use('/api/v1/domain', require('./routes/domainRoutes') );


app.get('/', (req, res, next)=>{
    res.send("Hello From node aPI server");
});

// request payload middleware
app.use(express.json);
app.use(urlencoded({extended:true}))

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server Listen on port ${PORT}`);
});

// error handling middle ware
app.use(function(err, req, res,next){
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message:err.message,
        body:{}
    })
});