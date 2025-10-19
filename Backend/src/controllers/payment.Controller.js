import mongoose from "mongoose";
import { paymentModel } from "../models/payment.model.js";
import axios from "axios";

const createPayment = async (req, res) => {
  const data = req.body;
  try {
    const { userId, userEmail, amount, paymentMethod, featureType } = data;

    const trx_id = new mongoose.Types.ObjectId();

    const initiate = {
      store_id: "smart68f345c820535",
      store_passwd: "smart68f345c820535@ssl",
      tran_id: trx_id,
      success_url: "http://localhost:3002/success",
      fail_url: "http://localhost:3002/fail",
      cancel_url: "http://localhost:3002/cancel",
      total_amount: 100,
      shipping_method: "NO",
      product_name: "featured",
      product_category: "digital",
      product_profile: "general",

      cus_name: "Tamjid Ahmed",
      cus_email: "tamjid@example.com",
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

    console.log(initResponse.data);
    return res.status(201).json({
      message: "Payment created successfully",
      data: initResponse.data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// const createPayment = async (req, res) => {
//   const data = req.body;
//   try {
//     const { userId, userEmail, amount, paymentMethod, featureType } = data;

//     const trx_id = new mongoose.Types.ObjectId();
//     console.log(trx_id);
//     const initiate = {
//       store_id: "smart68f345c820535",
//       store_passwd: "smart68f345c820535@ssl",
//       tran_id,
//     };

//     if (!userId && !postId) {
//       return res.status(400).json({
//         message: "All Fileds Are Required",
//       });
//     }
//     const result = new paymentModel({
//       userId,
//       userEmail,
//       amount,
//       paymentMethod,
//       featureType,
//       postId,
//     });

//     const savedPayment = await result.save();
//     return res.status(201).json({
//       message: "Payment created successfully",
//       payment: savedPayment,
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Server error", error: error.message });
//   }
// };

export const paymentController = {
  createPayment,
};
