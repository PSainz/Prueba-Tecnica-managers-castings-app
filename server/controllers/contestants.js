import express from 'express';
import Contestant from "../models/contestant.js";
import mongoose from 'mongoose';
const router = express.Router();

export const getContestants = async (req, res) => {
    try {
      const contestants = await Contestant.find();
  
      res.status(200).json(contestants);
    } catch (error) {
     
      res.status(404).json({ message: error.message });

    }
  };
  
  export const getContestant = async (req, res) => {
    const { id } = req.params;
  
    try {
      const contestant = await Contestant.findById(id);
  
      res.status(200).json(contestant);
    } catch (error) {
      
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
      console.log("Creado!")
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const updateContestant = async (req, res) => {
    const {id: _id } = req.params;
    // const { 
    //   first_name,
    //   last_name,
    //   birth_date,
    //   mobile_phone,
    //   country,
    //   email,
    //   star_wars_character,
    //   selectedFile } = req.body;

    const contestant = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

    // const updatedContestant = {
    //   first_name,
    //   last_name, 
    //   birth_date,
    //   mobile_phone,
    //   country,
    //   email,
    //   star_wars_character,
    //   selectedFile,
    //    _id: id };

    const updatedContestant = await Contestant.findByIdAndUpdate(_id, {...contestant, _id}, { new: true });
    

    res.json(updatedContestant);
    console.log("Editado!")
}

export const deleteContestant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Contestant.findByIdAndRemove(id);

    console.log('Borrado!')

    res.json({ message: "Contestant deleted successfully." });
}

  export default router;