const { MongoClient } = require("mongodb");


async function query3() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    const db = client.db("TweetsForDB");

    const airbnb = db.collection("Airbnb");


    // Query3: one must contain a complex search criterion 
    // (more than one expression with logical connectors):



    const query = {"$and": [{"price_per_night": {"$gt": 150}}, {"room.review.score_rating": {"$gt": 4.8}}]};

    // find all rooms number whose prices are higher than 150 and whose scores are highre than 4.8

    const result = await airbnb.find(query).count(); 


    
    console.log("The result of query3 is: ", result);

  } finally {

    await client.close();

  }

  
}



module.exports.query3 = query3;
query3();








