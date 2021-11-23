const { MongoClient } = require("mongodb");


async function query2() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    const db = client.db("TweetsForDB");

    const airbnb = db.collection("Tweets");



    // Query2: At least one query must contain an aggregation:

    const query = [
      {
        "$group": {
          "_id": "$price_per_night", 
          "count": {
            "$sum": 1
          }, 
          "price": {
            "$last": "$price_per_night"
          }
        }
      }, {
        "$sort": {
          "count": -1
        }
      }, {
        "$limit": 20
      }
    ];
  

    const result = await airbnb.aggregate(query).toArray();

    console.log("The result is: ", result);

  } finally {

    await client.close();

  }

  
}



module.exports.query2 = query2;
query2();







