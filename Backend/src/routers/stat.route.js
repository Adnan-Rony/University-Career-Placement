import  express  from 'express';
import {Statistics} from '../controllers/StatController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
const router = express.Router();


router.get('/userStat',verifyToken,Statistics.UserStatistics)
router.get('/employerStat',verifyToken,Statistics.EmployerStatistics)


export default router