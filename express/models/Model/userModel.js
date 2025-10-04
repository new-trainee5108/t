const mongoose = require("mongoose");
const UserResume = require("../Schema/userSchema");

async function profilePOST(user_id, title) {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
  const document = await UserResume.create({
    user_id: user_id,
    title: title,
  });
  await mongoose.disconnect();
  return document;
}

async function profileGET(user_id) {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
  const document = await UserResume.find({
    user_id: user_id,
  });
  await mongoose.disconnect();
  return document;
}

async function profilePersonalGET(user_id) {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
  const document = await UserResume.findById({
    _id: 1,
  });
  await mongoose.disconnect();
  return document;
}

async function profilePUT(user_id, data) {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
  const document = await UserResume.updateOne(
    { user_id: user_id },
    {
      $set: {
        name: data.name,
        email: data.email,
        number: data.number,
        address: data.address,
      },
    },
    { upsert: true },
  );
  await mongoose.disconnect();
  return document;
}

async function profileDELETE(user_id) {
  await mongoose.connect("mongodb://127.0.0.1:27017/users");
  const document = await UserResume.deleteOne({ user_id: user_id });
  await mongoose.disconnect();
  return document;
}

module.exports = {
  profilePOST,
  profileGET,
  profilePersonalGET,
  profilePUT,
  profileDELETE,
};
