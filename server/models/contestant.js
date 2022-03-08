import mongoose from "mongoose";

const spotSchema = mongoose.Schema({
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
  country: {
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

var Spot = mongoose.model("Spot", spotSchema);

export default Spot;
