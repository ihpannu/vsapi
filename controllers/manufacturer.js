const Model = require("../model");
const { Product, Manufacturer } = Model;

const manufacturerController = {
  all(req, res) {
    // Return all Manufacturers
    Manufacturer.find({}).exec((err, manufacturers) => res.json(manufacturers));
  }
};

module.exports = manufacturerController;
