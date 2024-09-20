const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  // Value validation for name: required, minimum length 3, maximum length 100
  // This ensures that the 'name' field must be a string, cannot be empty, and its length must be between 3 and 100 characters.
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Virtual for this genre instance URL.
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// Export model.
module.exports = mongoose.model("Genre", GenreSchema);