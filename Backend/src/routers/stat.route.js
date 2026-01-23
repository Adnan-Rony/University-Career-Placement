import  express  from 'express';
import {Statistics} from '../controllers/StatController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { checkAdmin } from '../middlewares/checkRole.js';
const router = express.Router();


router.get('/userStat',verifyToken,Statistics.UserStatistics)
router.get('/employerStat',verifyToken,Statistics.EmployerStatistics)
router.get('/adminStat',verifyToken,checkAdmin,Statistics.AdminStatistics)


export default router