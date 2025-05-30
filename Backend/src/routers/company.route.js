import express from "express";
import { createCompany, deleteCompany, getAllCompanies, getCompanyById, getMyCompany, updateCompany } from "../controllers/company.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { requireEmployer } from "../middlewares/requireEmployer.js";



const router = express.Router();

router.post("/createcompany",verifyToken,requireEmployer, createCompany);
router.get("/", getAllCompanies);
router.get("/my-company",verifyToken, getMyCompany);
router.get("/:id", getCompanyById);
router.put("/:id",verifyToken, updateCompany);
router.delete("/:id",verifyToken,requireEmployer, deleteCompany);



export default router;