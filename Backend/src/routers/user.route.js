import express from "express";
import { login, register, updateProfile } from '../controllers/user.controllers.js';
import isAuthenticated from '../middlewares/authenticate.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
