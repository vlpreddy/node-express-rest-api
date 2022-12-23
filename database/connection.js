const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
module.exports = async () => {
   console.log(process.env.DB_URL);
   await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        //useUnifiedTopology: true
        }).then(()=>{
            console.log("Database Connected");
            const PORT = process.env.PORT || 3000;
            app.listen(PORT, ()=>{
                console.log(`Server Listen on port ${PORT}`);
            });
        }).catch (error => {
            console.log("Database connectivity Error", error);
    });     
}