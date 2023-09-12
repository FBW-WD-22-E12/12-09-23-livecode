const express = require("express");
const cors = require("cors");
// Based on the .env file you have your dotenv config 
// In the dotenv file you can define your secrets with key="value"
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const peopleRouter = require("./routes/peopleRoute")

//mongoose.connect(process.env.DB_CONNECTION_STRING,()=>{console.log("mongodb is running");})

let app = express();
// Allow the CORS Policy from anywhere right now
app.use(cors());
// Receive and send raw JSON Data over HTTP
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// We accept the endpoint : localhost:3000/api/persons as a HTTP endpoint and redirect the incoming HTTP messages towards the defined Router
app.use("/api/persons", peopleRouter)

const port = process.env.PORT | 3000;

app.listen(port,()=>{
    console.log("Server is running...");
})

