const {
  profilePOST,
  profileGET,
  profilePersonalGET,
  profilePUT,
  profileDELETE,
} = require("../models/Model/userModel");

async function POSTprofile(req, res) {
  const { id } = req.params;
  const { title } = req.body;
  const project = await profilePOST(parseInt(id, 10), title);
  res.json(project);
}

async function GETprofile(req, res) {
  const { id } = req.params;
  const projects = await profileGET(parseInt(id, 10));
  res.json(projects);
}

async function GETPersonalprofile(req, res) {
  const { id } = req.params;
  const personal = await profilePersonalGET(parseInt(id, 10));
  res.json(personal);
}

async function PUTprofile(req, res) {
  const { id } = req.params;
  const projects = await profilePUT(parseInt(id, 10), req.body);
  res.json(projects);
}

async function DELETEprofile(req, res) {
  const { id } = req.params;
  const projects = await profileDELETE(parseInt(id, 10));
  res.json(projects);
}

module.exports = {
  POSTprofile,
  GETprofile,
  GETPersonalprofile,
  PUTprofile,
  DELETEprofile,
};
