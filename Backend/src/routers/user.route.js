import express from "express";
import { getuserData, login, logout, register, updateProfile } from '../controllers/user.controllers.js';
import isAuthenticated from '../middlewares/authenticate.js';
import { singleUpload } from '../middlewares/multer.js';


const router = express.Router();

router.post("/register",singleUpload, register);
router.get("/allUsers", getuserData);//new2
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
