import express from "express";
import { getuserData, login, logout, register, updateProfile } from '../controllers/user.controllers.js';
import isAuthenticated from '../middlewares/authenticate.js';

const router = express.Router();

router.post("/register", register);
router.get("/allUsers",isAuthenticated, getuserData);//new
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
