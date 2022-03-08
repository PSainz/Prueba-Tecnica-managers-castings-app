import express from 'express';
import Contestant from "../models/contestant.js";
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
        email,
        star_wars_character,
        selectedFile
    } = req.body;
  
    const newContestant = new Contestant({
        first_name,
        last_name,
        birth_date,
        mobile_phone,
        email,
        star_wars_character,
        selectedFile
    });
  
    try {
      await newContestant.save();
      res.status(201).json(newContestant);
      console.table(newSpnewContestantot, "NEW CONTESTANT");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export default router;