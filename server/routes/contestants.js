import express from 'express';


import { getContestants, getContestant, createContestant, deleteContestant, updateContestant  } from '../controllers/contestants.js';

const router = express.Router();

router.get('/', getContestants);
router.post('/', createContestant);
router.get('/:id', getContestant);
router.patch('/:id', updateContestant);
router.delete('/:id', deleteContestant);

export default router;