import express from 'express';
const router = express.Router();
import {getGames} from '../controllers/gameController.js';

router.route('/').get(getGames);

export default router;