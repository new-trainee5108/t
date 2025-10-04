const { Router } = require("express");
const {
  POSTexperience,
  GETexperience,
  PUTexperience,
  DELETEexperience,
} = require("../controller/experienceController");

const experienceRouter = Router();

experienceRouter
  .route("/:id")
  .get(GETexperience)
  .post(POSTexperience)
  .put(PUTexperience)
  .delete(DELETEexperience);

module.exports = experienceRouter;
