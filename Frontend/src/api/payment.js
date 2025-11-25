import axiosInstance from "./axiosInstance";
import toast from "react-hot-toast";
export const paymentfnc = async (userdata) => {
  try {
    const response = await axiosInstance.post("/payment/create-ssl-payment",userdata);
    console.log("Payment API Response:", response.data);
    toast.success("Payment initiated, redirecting...");
    if(response?.data?.gatewayUrl){
      window.location.replace(response.data.gatewayUrl)
    }
    return response.data;
  } catch (error) {
    toast.error("Failed,Plz Try again");
  }
};
