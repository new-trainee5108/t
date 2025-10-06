const mongoose = require("mongoose");
const EducationSchema = require("../Schema/educationSchema");

async function educationPOST(id) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await EducationSchema.create({
    degree: "untitled",
    resume_id: id,
  });
  await mongoose.disconnect();
  return document;
}

async function educationGET(id) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await EducationSchema.find({
    resume_id: id,
  }).select("edu_id school degree dateStart dateEnd location -_id");
  await mongoose.disconnect();
  return document;
}

async function educationPUT(id, data) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await EducationSchema.updateOne(
    { edu_id: data.id },
    {
      $set: {
        school: data.school,
        degree: data.degree,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        location: data.location,
      },
    },
    { upsert: true },
  );
  await mongoose.disconnect();
  console.log(document);
  return document;
}

async function educationDELETE(id, data) {
  await mongoose.connect(process.env.MONGODB_URI);
  const document = await EducationSchema.deleteOne({ edu_id: data.id });
  await mongoose.disconnect();
  return document;
}

module.exports = {
  educationPOST,
  educationGET,
  educationPUT,
  educationDELETE,
};
