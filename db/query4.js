const { MongoClient } = require("mongodb");


async function query4() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");


    // Query4: // one should be counting documents for an specific user 
   
    // const query = [
    //   {
    //     "$group": {
    //       "_id": "$host.host_id", 
    //       "count": {
    //         "$sum": 1
    //       }
    //     }
    //   }, {
    //     "$sort": {
    //       "count": -1
    //     }
    //   }
    // ];

    const query ={"host.host_id": 10338};

    // find a certain host and count how many times he shows up in the db

    const result = await airbnb.find(query).count(); 

    console.log("The result of query4 is: ", result);

  } finally {

    await client.close();

  }

  
}



module.exports.query4 = query4;
query4();

