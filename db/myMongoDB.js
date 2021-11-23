const { MongoClient, ObjectID } = require("mongodb");




async function getAirbnb() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");

    const query = {};

    return await airbnb.find(query).sort({$natural: -1}).limit(10).toArray();  
    
  } finally {

    await client.close();

  }
  
}

async function countAirbnb() {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");

    const query = {};

    return await airbnb.find(query).count();  
    
  } finally {

    await client.close();

  }
  
}




async function getAirbnbByID(airbnbId) {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb"); 

    return await airbnb.find({"_id": ObjectID(airbnbId)}).toArray();  
    
  } finally {

    await client.close();

  }
  
}


async function deleteAirbnb(airbnbId) {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");

    await airbnb.deleteOne({"_id": ObjectID(airbnbId)});  
    
  } finally {

    await client.close();

  }
  
}




async function updateAirbnb(id, newAirbnb) {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");

    // const host_name = newAirbnb.host.host_name;
    // const room_type = newAirbnb.room.room_name;
    // const price_per_night = newAirbnb.price_per_night;

    await airbnb.updateOne({"_id": ObjectID(id)}, {"$set" : newAirbnb }); 

  } finally {

    await client.close();

  }
  
}




async function createAirbnb(newAirbnb) {
  let client;

  try {
    const uri = "mongodb://localhost:27017";

    client = new MongoClient(uri);

    await client.connect();

    console.log("Connected!");

    const db = client.db("AirbnbDB");

    const airbnb = db.collection("Airbnb");
 
    return await airbnb.insertOne(newAirbnb);  

  } finally {

    await client.close();

  }
  
}




module.exports.getAirbnb = getAirbnb;
module.exports.countAirbnb = countAirbnb;
module.exports.getAirbnbByID = getAirbnbByID;
module.exports.deleteAirbnb = deleteAirbnb;
module.exports.updateAirbnb = updateAirbnb;
module.exports.createAirbnb = createAirbnb;







