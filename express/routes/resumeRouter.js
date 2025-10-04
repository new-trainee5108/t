const { Router } = require("express");
const educationRouter = require("./educationRouter");
const experienceRouter = require("./experienceRouter");

const resumeRouter = Router();

resumeRouter.use("/education", educationRouter);

resumeRouter.use("/experience", experienceRouter);

module.exports = resumeRouter;
