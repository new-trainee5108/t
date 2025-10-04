const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const UserResumeSchema = new Schema(
  {
    user_id: { type: Number },
    title: { type: String },
    _id: { type: Number },
    name: { type: String },
    email: { type: String },
    number: { type: String },
    address: { type: String },
    createdAt: {
      type: Date,
      default: Date.now, // Sets the default to the current date and time
    },
  },
  { _id: false },
);

UserResumeSchema.plugin(AutoIncrement);

module.exports = mongoose.model("user", UserResumeSchema);
