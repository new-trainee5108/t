require('dotenv').config()

const baseUrl = 'https://t-q8ve.onrender.com'
const { MongoClient } = require("mongodb");
const { Client } = require("pg");

const uri = process.env.MONGODB_URI
const clientMongo = new MongoClient(uri);

const clientPG = new Client({
  connectionString: process.env.DATABASE_URL
});

async function d() {
  try {
    await clientMongo.connect();
    console.log(200, 'd');
  } catch (e) {
    console.log(500, 'd');
  } finally {
    await clientMongo.close();
  }
}

async function dbMongoConnect(req, res) {
  try {
    await clientMongo.connect();
    console.log(200, 'm');
  } catch (e) {
    console.log(500, 'm');
  } finally {
    await clientMongo.close();
  }
}

async function dbPGConnect(req, res) {
  try {
    await clientPG.connect();
    console.log(200, 'p')
  } catch (e) {
    console.log(500, 'p')
  } finally {
    await clientPG.end();
  }
}

    async function dbMongo() {
      const db = await fetch( 'https://t-q8ve.onrender.com/database/mongo').then(
        (data) => data.json(),
      );
      if (db === 500) console.log("error");
      else console.log("connected");
    }
    dbMongo();

  dbPGConnect()
d()
dbMongoConnect()
