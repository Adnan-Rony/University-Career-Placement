import  express  from 'express';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { checkAdmin } from '../middlewares/checkRole.js';
import {  deleteCompany,deleteJobByAdmin, deleteUserById, getAllAppliedJobs, getAllCompanies, getAllUsers,  getCompanyById, updateCompanyByAdmin } from '../controllers/AdminController.js';
import {  getAllJobs, getJobById } from '../controllers/job.controller.js';

const router = express.Router();


//user
router.get("/user",verifyToken,checkAdmin ,getAllUsers)
router.delete("/user/:id",verifyToken,checkAdmin ,deleteUserById)



//jobs
router.get("/job",verifyToken,checkAdmin ,getAllJobs)
router.get("/job/:id", getJobById);
router.delete("/job/:id", verifyToken, checkAdmin, deleteJobByAdmin);



//company
router.get("/company",verifyToken,checkAdmin ,getAllCompanies)

router.get("/company/:id",verifyToken,checkAdmin ,getCompanyById)


router.put("/company/:id",verifyToken,checkAdmin ,updateCompanyByAdmin)

router.delete("/company/:id",verifyToken,checkAdmin ,deleteCompany)




//application
router.get("/application",verifyToken,checkAdmin ,getAllAppliedJobs)



export default router;