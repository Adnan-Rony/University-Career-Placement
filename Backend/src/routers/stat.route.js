import  express  from 'express';
import {UserStatistics } from '../controllers/StatController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
const router = express.Router();


router.get('/userStat',verifyToken,UserStatistics)


export default router