import  express  from 'express';
import { paymentController } from '../controllers/payment.Controller.js';



const router=express.Router()

router.post("/create-ssl-payment",paymentController.createPayment)

export default router