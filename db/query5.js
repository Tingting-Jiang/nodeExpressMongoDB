
const { MongoClient } = require("mongodb");


async function query5() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    const db = client.db("TweetsForDB");

    const airbnb = db.collection("Airbnb");

  

    // and one must be updating a document based on a query parameter 
    // (e.g. flipping on or off a boolean attribute for a document, such as enabling/disabling a song)
    const query = {$inc: {"price_per_night": 10}};

    // increase the price by 10 if the host is a super Host

    await airbnb.updateMany({"host.superHost": true}, query);
   
   


  } finally {

    await client.close();

  }

  
}



module.exports.query5 = query5;
query5();





