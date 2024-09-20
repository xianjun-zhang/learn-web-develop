const mongoose = require("mongoose");
const { DateTime } = require("luxon"); // for date handling

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 }, // Value validation: required, maximum length 100
  family_name: { type: String, required: true, maxLength: 100 }, // Value validation: required, maximum length 100
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author "full" name.
// This function returns the full name of the author by concatenating the family name and first name.
// To call this function, access the 'name' property of an Author model instance.
// Expected output: A string in the format "Family Name, First Name".
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// Virtual for this author instance URL.
// This function returns the URL for the author's catalog page.
// To call this function, access the 'url' property of an Author model instance.
// Expected output: A string in the format "/catalog/author/<author_id>".
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

AuthorSchema.virtual("lifespan").get(function () {
  // This function returns a string representing the author's lifespan.
  // It formats the date of birth and death using DateTime.toLocaleString with DateTime.DATE_MED.
  // To call this function, access the 'lifespan' property of an Author model instance.
  // Expected output: A string in the format "YYYY-MM-DD - YYYY-MM-DD" or "YYYY-MM-DD - " if date_of_death is not set.
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATE_MED
    );
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATE_MED
    );
  }
  return lifetime_string;
});

AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  // This function returns the date of birth in the format 'YYYY-MM-DD'.
  // To call this function, access the 'date_of_birth_yyyy_mm_dd' property of an Author model instance.
  // Expected output: A string in the format 'YYYY-MM-DD'.
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); // format 'YYYY-MM-DD'
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  // This function returns the date of death in the format 'YYYY-MM-DD'.
  // To call this function, access the 'date_of_death_yyyy_mm_dd' property of an Author model instance.
  // Expected output: A string in the format 'YYYY-MM-DD'.
  return DateTime.fromJSDate(this.date_of_death).toISODate(); // format 'YYYY-MM-DD'
});

// Export model.
module.exports = mongoose.model("Author", AuthorSchema);