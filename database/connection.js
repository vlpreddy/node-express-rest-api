const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
module.exports = async () => {
       
   await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        //useUnifiedTopology: true
        }).then(()=>{
            console.log("Database Connected");
        }).catch (error => {
            console.log("Database connectivity Error", error);
    });
        

}