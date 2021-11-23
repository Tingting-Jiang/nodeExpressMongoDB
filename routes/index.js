var express = require("express");
var router = express.Router();

const myDB = require("../db/myMongoDB.js");

/* GET home page. */
router.get("/", async function(req, res) {
  const total = await myDB.countAirbnb();

  const allAirbnb = await myDB.getAirbnb();
  res.render("index", { allAirbnb, total });


});



/* GET airbnb details. */
router.get("/airbnb/:_id", async function (req, res) {
  console.log("Got airbnb details");

  const airbnbID = req.params._id;

  console.log("got airbnbID ", airbnbID);

  const airbnbs = await myDB.getAirbnbByID(airbnbID);

  const airbnb = airbnbs[0];

  console.log("got airbnb by id", airbnb);

  res.render("airbnbDetails", {airbnb: airbnb});
});


/* POST create airbnb. */
router.post("/airbnb/create", async function (req, res) {

  console.log("Got post create/airbnb");

  const airbnb = {
    "host": {"host_name": req.body.host_name},
    "room": {"name": req.body.room_name},
    "price_per_night": req.body.price_per_night,
    "room_type": req.body.room_type,
  };

  console.log("got create airbnb", airbnb);

  await myDB.createAirbnb(airbnb);

  console.log("Airbnb created");

  res.redirect("/");
});



/* POST delete airbnbs. */
router.post("/airbnb/delete", async function (req, res) {
  console.log("Got post delete airbnb");

  const id = req.body._id;

  console.log("got delete airbnb", id);

  await myDB.deleteAirbnb(id);

  console.log("airbnb deleted");

  res.redirect("/");
});


/* POST update airbnbs. */
router.post("/airbnb/:_id", async function (req, res) {
  console.log("Got post update airbnb");
  const id = req.body._id;

  const airbnb = {
    "host": {"host_name": req.body.host_name},

    "room": {"name": req.body.room_name},

    "price_per_night": req.body.price_per_night,

    "room_type": req.body.room_type,
  };

  console.log("got update airbnb", airbnb);
  console.log("got update id", id);

  await myDB.updateAirbnb(id, airbnb);

  console.log("airbnb updated");

  res.redirect("/");
});









module.exports = router;
