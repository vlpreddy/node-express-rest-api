const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const mymiddleware = (req, res, next) =>{
    console.log("Hey whats up");
    next();
}

//app.use(mymiddleware); Application Level MiddleWare
// her we can mount the middleware either via app object which is commented in above line or you can directly send via path like below line
app.get('/', mymiddleware, (req, res, next)=>{
    res.send("Hello From node aPI server");
})

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