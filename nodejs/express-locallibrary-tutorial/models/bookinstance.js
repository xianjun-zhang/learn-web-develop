const mongoose = require("mongoose");
const { DateTime } = require("luxon"); //for date handling

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  // Value validation for book: required, reference to Book model
  // The 'ref' property specifies the model to which the field refers. In this case, 'Book' model.
  // For example, if the 'book' field is set to an ObjectId that matches an existing Book document's _id,
  // Mongoose can populate the 'book' field with the actual Book document when queried.
  book: { type: Schema.ObjectId, ref: "Book", required: true },
  // Value validation for imprint: required
  imprint: { type: String, required: true },
  // Value validation for status: required, with specific allowed values, default to "Maintenance"
  status: {
    type: String,
    required: true,
    // The 'enum' property specifies an array of allowed values for the 'status' field.
    // This means that the 'status' field can only be set to one of the values in this array.
    // Attempting to set 'status' to a value not in this array will result in a validation error.
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  // Value validation for due_back: default to current date and time
  due_back: { type: Date, default: Date.now },
});

// Virtual for this bookinstance object's URL.
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); //format 'YYYY-MM-DD'
});

// Export model.
module.exports = mongoose.model("BookInstance", BookInstanceSchema);