import mongoose from "mongoose";
import { paymentModel } from "../models/payment.model.js";
import axios from "axios";

const createPayment = async (req, res) => {
  const data = req.body;

  try {
    const { userId, email, amount } = data;

    const trx_id = new mongoose.Types.ObjectId();

    const newpayment = new paymentModel({
      userId,
      email,
      amount,
      trx_id,
      status: "pending",
    });

    //save to db
    const savedPayment = await newpayment.save();

    const BACKEND_URL = process.env.BACKEND_URL;

    const initiate = {
      store_id: process.env.STORE_ID,
      store_passwd: process.env.STORE_PASSWORD,
      tran_id: trx_id.toString(),
      success_url: `${BACKEND_URL}/api/v1/payment/success-payment`,
      fail_url: `${BACKEND_URL}/api/v1/payment/payment-fail`,
      cancel_url: `${BACKEND_URL}/api/v1/payment/payment-cancel`,
      total_amount: amount,
      shipping_method: "NO",
      product_name: "featured",
      product_category: "digital",
      product_profile: "general",

      cus_name: "Tamjid Ahmed",
      cus_email: email,
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      cus_phone: "0179102211",
    };

    const initResponse = await axios({
      url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      method: "POST",
      data: initiate,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    //Gateway Url
    const gatewayUrl = initResponse.data.GatewayPageURL;

    return res.status(201).json({
      message: "Payment created successfully",
      gatewayUrl: gatewayUrl,
      data: initResponse.data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const successPayment = async (req, res) => {
  const paymentSuccess = req.body;
    const FRONTEND_URL = process.env.FRONTEND_URL;
  // console.log("✅ Payment Success Data:", paymentSuccess);
  try {
    const store_id = process.env.STORE_ID;
    const store_passwd = process.env.STORE_PASSWORD;
    const isValidatePayment = await axios.get(
      `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${paymentSuccess.val_id}&
      store_id=${store_id}&store_passwd=${store_passwd}&format=json`
    );
   

    const validationData = isValidatePayment.data;
    //find the tansaction id from db
    const payment = await paymentModel.findOne({
      trx_id: validationData.tran_id,
    });
    if (!payment) {
      return res.status(404).json({ message: "Payment record not found" });
    }

    if (validationData.status === "VALID") {
      //update to db
      payment.status = "success";
      await payment.save();
      return res.redirect(`${FRONTEND_URL}/payment-success`);
    } else {
      return res.send({
        message: "Invalid Payment",
      });
    }

    return res.status(201).json({
      message: "Payment created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const failPayment = (req, res) => {
  const FRONTEND_URL = process.env.FRONTEND_URL;
  return res.redirect(`${FRONTEND_URL}/payment-fail`);
};

const cancelPayment = (req, res) => {
  const FRONTEND_URL = process.env.FRONTEND_URL;
  return res.redirect(`${FRONTEND_URL}/payment-cancel`);


};

export const paymentController = {
  createPayment,
  successPayment,failPayment,cancelPayment
};
