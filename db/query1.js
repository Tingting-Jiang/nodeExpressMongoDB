const { MongoClient } = require("mongodb");


async function query1() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");


    // Query1: At least one query must contain an aggregation:

    const query = [
      {
        "$project": {
          "host": 0, 
          "room": 0, 
          "neighborhood": 0
        }
      }, {
        "$sort": {
          "price_per_night": -1
        }
      }, {
        "$limit": 5
      }
    ];


    const result = await airbnb.aggregate(query).toArray();  

    // find the information of 5 most expensive rooms

    console.log("The result is: ", result);

  } finally {

    await client.close();

  }

  
}



module.exports.query1 = query1;

query1();








