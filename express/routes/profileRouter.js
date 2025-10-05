const { Router } = require("express");
const passport = require("passport");
const {
  POSTprofile,
  GETprofile,
  GETPersonalprofile,
  PUTprofile,
  DELETEprofile,
} = require("../controller/profileController");

const profileRouter = Router();

profileRouter
  .route("/:id")
  .get(GETprofile)
  .post(POSTprofile)
  .put(PUTprofile)
  .delete(DELETEprofile);

profileRouter.get("/personal/:id",  GETPersonalprofile);

module.exports = profileRouter;
