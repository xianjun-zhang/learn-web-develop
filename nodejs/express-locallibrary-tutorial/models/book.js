const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  // Value validation for title: required
  title: { type: String, required: true },
  // Value validation for author: required, reference to Author model
  // The 'ref' property specifies the model to which the field refers. In this case, 'Author' model.
  // For example, if the 'author' field is set to an ObjectId that matches an existing Author document's _id,
  // Mongoose can populate the 'author' field with the actual Author document when queried.
  author: { type: Schema.ObjectId, ref: "Author", required: true },
  // Value validation for summary: required
  summary: { type: String, required: true },
  // Value validation for isbn: required
  isbn: { type: String, required: true },
  // Value validation for genre: reference to Genre model, can be multiple
  // Similar to 'author', 'ref' specifies the model to which the field refers, allowing for population of Genre documents.
  genre: [{ type: Schema.ObjectId, ref: "Genre" }],
});

// Virtual for this book instance URL.
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// Export model.
module.exports = mongoose.model("Book", BookSchema);