const { Router } = require("express");
const {
  POSTeducation,
  GETeducation,
  PUTeducation,
  DELETEeducation,
} = require("../controller/educationController");

const educationRouter = Router();

educationRouter
  .route("/:id")
  .get(GETeducation)
  .post(POSTeducation)
  .put(PUTeducation)
  .delete(DELETEeducation);

module.exports = educationRouter;
