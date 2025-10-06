require('dotenv').config()

const { MongoClient } = require("mongodb");
const { Client } = require("pg");

const uri = "mongodb+srv://everybillss_db_user:UMj0fbLB7ifyVL8C@cluster0.zi4s0jt.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
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



  dbPGConnect()
d()
dbMongoConnect()
