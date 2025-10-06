const { MongoClient } = require("mongodb");
const { Client } = require("pg");

const uri = process.env.MONGODB_URI
const clientMongo = new MongoClient(uri);

const clientPG = new Client({
  connectionString: process.env.DATABASE_URL
});

async function dbMongoConnect(req, res) {
  try {
    await clientMongo.connect();
    return res.json(200);
  } catch (e) {
    return res.json(500);
  } finally {
    await clientMongo.close();
  }
}

async function dbPGConnect(req, res) {
  try {
    await clientPG.connect();
    return res.status(200).json("OK");
  } catch (e) {
    return res.status(500).json("Internal Server Error 500");
  } finally {
    await clientPG.end();
  }
}

module.exports = {
  dbMongoConnect,
  dbPGConnect,
};
