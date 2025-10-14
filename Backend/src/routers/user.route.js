import  express  from 'express';
import { getCurrentUser, login, logout, register, updateUserProfile } from "../controllers/user.controllers.js";
import { verifyToken } from './../middlewares/VerifyToken.js';
import { googleLogin } from '../controllers/firebaseAuthController.js';



const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin);
router.get("/logout", logout);


router.put("/profile/update",verifyToken ,updateUserProfile);


router.get("/me",verifyToken,getCurrentUser)




export default router;
