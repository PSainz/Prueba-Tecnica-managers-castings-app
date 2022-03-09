import express from 'express';
import Contestant from "../models/contestant.js";
const router = express.Router();

export const getContestants = async (req, res) => {
    try {
      const contestants = await Contestant.find();
  
      res.status(200).json(contestants);
    } catch (error) {
      console.log("PASANDO POR AQUI getContestants")
      res.status(404).json({ message: error.message });
    }
  };
  
  export const getContestant = async (req, res) => {
    const { id } = req.params;
  
    try {
      const contestant = await Contestant.findById(id);
  
      res.status(200).json(contestant);
    } catch (error) {
      console.log("PASANDO POR AQUI getContestant")
      res.status(404).json({ message: error.message });
    }
  };
  
  export const createContestant = async (req, res) => {
    const {
        first_name,
        last_name,
        birth_date,
        mobile_phone,
        country,
        email,
        star_wars_character,
        selectedFile
    } = req.body;
  
    const newContestant = new Contestant({
        first_name,
        last_name,
        birth_date,
        mobile_phone,
        country,
        email,
        star_wars_character,
        selectedFile
    });
  
    try {
      await newContestant.save();
      res.status(201).json(newContestant);
      console.log("PUTO CREADO")
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

//   export const updateContestant = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

export const deleteContestant = async (req, res) => {
    const { id } = req.params;

    console.log("PASANDO POR AQUI deleteContestant", id)

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Contestant.findByIdAndRemove(id);

    res.json({ message: "Contestant deleted successfully." });
}

  export default router;