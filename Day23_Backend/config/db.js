
const mongoose = require('mongoose');
const uri = "mongodb+srv://<userName>:<password>@cluster0.xpbcivd.mongodb.net/<db-name>?appName=Cluster0";

let dbURI = uri;
dbURI = dbURI.replace("<userName>", process.env.DB_USERNAME);
dbURI = dbURI.replace("<password>", process.env.DB_PASSWORD);
dbURI = dbURI.replace("<db-name>", process.env.DB_NAME);


mongoose.connect(dbURI)
.then(()=>{
    console.log(`----------MongoDb connected--------------`);
})
.catch((err)=>{
    console.log(`DB connection failed :\n`);
    console.log(err);
})


















