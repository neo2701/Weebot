// module for mongodb

const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("../secrets/mongodb.json");
const mongoClient = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

module.exports = mongoClient;
