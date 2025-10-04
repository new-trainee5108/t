const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  exp_id: Number,
  company: { type: String },
  title: { type: String },
  dateStart: { type: String },
  dateEnd: { type: String },
  location: { type: String },
  description: { type: String },
  resume_id: { type: Schema.Types.Number, ref: "user" },
});

ExperienceSchema.plugin(AutoIncrement, { inc_field: "exp_id" });

module.exports = mongoose.model("experience", ExperienceSchema);
