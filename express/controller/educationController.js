const {
  educationPOST,
  educationPUT,
  educationDELETE,
  educationGET,
} = require("../models/Model/educationModel");

async function POSTeducation(req, res) {
  const { id } = req.params;
  const project = await educationPOST(parseInt(id, 10));
  res.json({ id: project.edu_id });
}

async function GETeducation(req, res) {
  const { id } = req.params;
  const projects = await educationGET(parseInt(id, 10));
  res.json(projects);
}

async function PUTeducation(req, res) {
  const { id } = req.params;
  const project = await educationPUT(parseInt(id, 10), req.body);
  res.json(project);
}

async function DELETEeducation(req, res) {
  const { id } = req.params;
  const project = await educationDELETE(parseInt(id, 10), req.body);
  res.json(project);
}

module.exports = {
  POSTeducation,
  GETeducation,
  PUTeducation,
  DELETEeducation,
};
