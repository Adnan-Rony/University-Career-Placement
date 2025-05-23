import  express  from 'express';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { checkAdmin } from '../middlewares/checkRole.js';
import { getAllUsers } from '../controllers/AdminController.js';

const router = express.Router();

router.get("/users",verifyToken,checkAdmin ,getAllUsers)


export default router;