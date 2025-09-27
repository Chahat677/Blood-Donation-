const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  phone: String,
  age: Number       //  Age field added
});

module.exports = mongoose.model("Donor", donorSchema);
