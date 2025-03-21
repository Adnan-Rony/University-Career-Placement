import express from "express";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/authenticate.js";


const router = express.Router();

router.post("/post",isAuthenticated, postJob);
router.get("/get",isAuthenticated, getAllJobs);
router.get("/getadminjobs",isAuthenticated, getAdminJobs);
router.get("/get/:id",isAuthenticated, getJobById);


export default router;