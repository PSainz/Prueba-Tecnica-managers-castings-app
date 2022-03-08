import express from 'express';

import { getContestants, getContestant, createContestant } from '../controllers/contestants.js';

const router = express.Router();

router.get('/', getContestants);
router.post('/', createContestant);
router.get('/:id', getContestant);

export default router;