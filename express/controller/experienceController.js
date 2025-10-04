const {
  experiencePOST,
  experiencePUT,
  experienceDELETE,
  experienceGET,
} = require("../models/Model/experienceModel");

async function POSTexperience(req, res) {
  const { id } = req.params;
  const project = await experiencePOST(parseInt(id, 10));
  res.json({ id: project.exp_id });
}

async function GETexperience(req, res) {
  const { id } = req.params;
  const projects = await experienceGET(parseInt(id, 10));
  res.json(projects);
}

async function PUTexperience(req, res) {
  const { id } = req.params;
  const project = await experiencePUT(parseInt(id, 10), req.body);
  res.json(project);
}

async function DELETEexperience(req, res) {
  const { id } = req.params;
  const project = await experienceDELETE(parseInt(id, 10), req.body);
  res.json(project);
}

module.exports = {
  POSTexperience,
  GETexperience,
  PUTexperience,
  DELETEexperience,
};
