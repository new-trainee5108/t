const { MongoClient } = require("mongodb");
const { Client } = require("pg");

const uri = "mongodb://127.0.0.1:27017/";
const clientMongo = new MongoClient(uri);

const clientPG = new Client({
  host: "localhost",
  user: "kumar97",
  database: "top_users",
  password: "",
  port: 5432,
});

async function dbMongoConnect(req, res) {
  try {
    await clientMongo.connect();
    console.log("mongo", 200);
  } catch (e) {
    console.log("mongo", 500);
  } finally {
    await clientMongo.close();
  }
}

async function dbPGConnect(req, res) {
  try {
    const pg = await clientPG.connect();
    console.log("pg", 200);
  } catch (e) {
    console.log("pg", 500);
  } finally {
    await clientPG.end();
  }
}

dbMongoConnect();
dbPGConnect();
