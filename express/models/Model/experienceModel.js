const mongoose = require("mongoose");
const ExperienceSchema = require("../Schema/experienceSchema");

async function experiencePOST(id) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await ExperienceSchema.create({
    title: "untitled",
    resume_id: id,
  });
  await mongoose.disconnect();
  return document;
}

async function experienceGET(id) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await ExperienceSchema.find({
    resume_id: id,
  }).select("exp_id company title dateStart dateEnd location description -_id");
  await mongoose.disconnect();
  return document;
}

async function experiencePUT(id, data) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await ExperienceSchema.updateOne(
    { exp_id: data.id },
    {
      $set: {
        company: data.company,
        title: data.title,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        location: data.location,
        description: data.description,
      },
    },
  );
  await mongoose.disconnect();
  return document;
}

async function experienceDELETE(id, data) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await ExperienceSchema.deleteOne({ exp_id: data.id });
  await mongoose.disconnect();
  return document;
}

module.exports = {
  experiencePOST,
  experienceGET,
  experiencePUT,
  experienceDELETE,
};
