import mongoose from "mongoose";

const contestantSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  birth_date: {
    type: String,
  },
  mobile_phone: {
    type: String,
  },
  countrie: {
    type: String,
  },
  email: {
    type: String,
  },
  star_wars_character: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
});

var Contestant = mongoose.model("Contestant", contestantSchema);

export default Contestant;
