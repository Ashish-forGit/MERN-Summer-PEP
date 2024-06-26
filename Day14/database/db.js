const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://<userName>:<password>@cluster0.xpbcivd.mongodb.net/<db-name>?appName=Cluster0";

let dbURI = uri;
dbURI = dbURI.replace("<userName>", process.env.DB_USERNAME);
dbURI = dbURI.replace("<password>", process.env.DB_PASSWORD);
dbURI = dbURI.replace("<db-name>", process.env.DB_NAME);

// console.log(process.env.PORT);



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    const database = client.db(process.env.DB_NAME);
    const products = database.collection('products');
     await products.insertOne({
        name: "ashish"
    })
    console.log("MongoDb Connected!");
}
catch(error){
    console.log("error")
} 
} 
run()
