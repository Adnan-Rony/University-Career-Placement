import  express  from 'express';
import { paymentController } from '../controllers/payment.Controller.js';



const router=express.Router()

router.post("/create-ssl-payment",paymentController.createPayment)
router.post("/success-payment",paymentController.successPayment)
router.post("/payment-fail",paymentController.failPayment)
router.post("/payment-cancel",paymentController.cancelPayment)

export default router