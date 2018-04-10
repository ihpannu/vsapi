const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  // One to many relationship
  manufacturer: { type: ObjectId, ref: "Manufacturer" }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
});
