import axiosInstance from "./axiosInstance"

export const paymentfnc= async()=>{

    const response=await axiosInstance.post('/payment/create-ssl-payment')
    return response.data

}