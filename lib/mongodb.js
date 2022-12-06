// module for mongodb
require("dotenv").config();
const { MongoClient } = require("mongodb");
const MONGO_URI = process.env.MONGO_URI;
const mongoClient = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
module.exports = mongoClient;
