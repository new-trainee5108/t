const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const EducationSchema = new Schema(
  {
    edu_id: Number,
    school: { type: String },
    degree: { type: String },
    dateStart: { type: String },
    dateEnd: { type: String },
    location: { type: String },
    resume_id: { type: Schema.Types.Number, ref: "user" },
  },
  { strict: false },
);

EducationSchema.plugin(AutoIncrement, { inc_field: "edu_id" });
module.exports = mongoose.model("education", EducationSchema);
