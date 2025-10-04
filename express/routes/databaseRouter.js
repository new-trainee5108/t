const {
  dbMongoConnect,
  dbPGConnect,
} = require("../controller/databaseController");
const { Router } = require("express");

const databaseRouter = Router();

databaseRouter.get("/postgres", dbPGConnect);

databaseRouter.get("/mongo", dbMongoConnect);

module.exports = databaseRouter;
