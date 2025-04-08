import { registerUser } from "../controllers/authController.js";
import isAuthenticatedNew from "../middlewares/isAuthenticatedNew.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/register", registerUser);

router.get("/protected", isAuthenticatedNew, (req, res) => res.json({ message: "Welcome, authenticated user!" }));

router.get("/admin", isAuthenticatedNew, authorizeRoles("admin"), (req, res) => res.json({ message: "Welcome, Admin!" }));


export default router;
