const express = require("express");
const router = express.Router();
const {addPeople} = require("./controllers/peopleController")

// CRUD HTTP Operators together with the methods

// Method: Post, Endpoint: localhost:3000/api/persons/
// Create a new person from the incoming information

// Post Method for sending raw JSON data inside of the Body towards our Server
//router.route("/").post() -> Alternative
router.post("/", addPeople)

// Method: Get, Endpoint: localhost:3000/api/persons/getAllBerlinPersons
//router.route("/getAllBerlinPersons").get(getAllBerlinPersonsMethod)