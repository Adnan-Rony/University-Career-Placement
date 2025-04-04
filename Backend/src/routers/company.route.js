import express from "express";
import { getCompanyById, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/registerCompany", registerCompany);
router.get("/get", getCompany);
router.get("/get/:id",getCompanyById );
router.put("/update/:id", isAuthenticated, updateCompany);

export default router;