import { CheckCircle2, Lock } from "lucide-react";
import React, { useState } from "react";
import { useCurrentUser } from "../../../hooks/useAuth";
import Loading from "../../../Components/loading/Loading";
import { usePayment } from "../../../hooks/usePayment";
import toast from "react-hot-toast";
import axios from "axios";
import axiosInstance from "../../../api/axiosInstance";
import { useLocation, useNavigate } from "react-router";
import { UseMyCompany } from "../../../hooks/useCompany";
import { UseCreateJob } from "../../../hooks/useJobs";

export default function FeaturedPayment() {
  const { data, isPending } = useCurrentUser();
  const [selectedPlan, setSelectedPlan] = useState("free");
  const { mutate, isSuccess, isPending: paymentInProgress } = usePayment();
 const { mutate: createJob, isLoading } = UseCreateJob();
 const navigate = useNavigate();
const location=useLocation();
const formdata=location.state?.jobData;
console.log(formdata);


const handleFreePost=()=>{
        createJob(formdata, {
          onSuccess: () => {
            toast.success("Job created successfully");
           
            navigate("/");
          },
          onError: (error) => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            toast.error(error.response?.data?.message || "Failed to create job");
          },
        });
}

  const handlePayment = () => {
    if (isPending || !data?.user?.email) {
      console.log("User data not ready yet");
      toast.error("User data not loaded. Please wait.");
      return;
    }

    const userdata = {
      email: data.user.email,
      name: data.user.name,
      userId: data.user._id,
      amount: 500,
    };
        createJob(formdata, {
          onSuccess: () => {
            toast.success("Job created successfully");
           
           
          },
          onError: (error) => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            toast.error(error.response?.data?.message || "Failed to create job");
          },
        });

    console.log("Sending to mutate:", userdata);
    mutate(userdata); //[payment api]
  };

  if (isPending) {
    return <Loading />;
  }
  if (paymentInProgress) {
    return <Loading />;
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Selected Plan Card */}
      <div className="mb-6 border border-gray-200 p-6 shadow-sm rounded-lg bg-white">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Select Your Plan
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Your chosen job posting package
            </p>
          </div>
          <div className="rounded-full bg-purple-100 p-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
          </div>
        </div>

      

          {/* Free Plan */}
  <label
   className="mt-3 rounded-lg p-4 bg-purple-100/45 flex items-start gap-4
    cursor-pointer hover:bg-purple-200 transition">
    <input
      type="radio"
      name="plan"
      value="free"
       checked={selectedPlan === "free"}
       onChange={(e) => setSelectedPlan(e.target.value)}
      className="radio radio-primary mt-2"
    />
    <div>
      <p className="text-lg font-semibold text-gray-800">Free Job Post</p>
      <p className="text-sm text-gray-500 mt-1">
        Basic visibility for 7 days. Suitable for small job posts.
      </p>
    </div>
  </label>

  {/* Premium Plan */}
  <label className="mt-3 rounded-lg p-4 bg-purple-100/45 flex items-start gap-4 cursor-pointer hover:bg-purple-200 transition">
    <input
      type="radio"
      name="plan"
      value="premium"
        checked={selectedPlan === "premium"}
      onChange={(e)=>setSelectedPlan(e.target.value)}
      className="radio radio-primary mt-2"
    />
    <div>
      <p className="text-lg font-semibold text-gray-800">Premium Job Post</p>
      <p className="text-sm text-gray-500 mt-1">
        Get featured placement, priority visibility, and analytics for 30 days.
      </p>
    </div>
  </label>
      </div>

      {/* Payment Summary Card */}
      <div className="mb-6 border border-gray-200 bg-white p-6 shadow-sm rounded-lg">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Payment Summary
        </h2>

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Plan Name</span>
            <span className="font-medium text-gray-800">Premium Job Post</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Duration</span>
            <span className="font-medium text-gray-800">30 Days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Base Price</span>
            <span className="font-medium text-gray-800">
              {selectedPlan==="premium"?"500BDT":"0"}
            </span>
          </div>
        </div>

        <div className="space-y-3 py-4 border-b border-gray-200">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Tax </span>
            <span className="font-medium text-gray-800">0</span>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <span className="text-base font-semibold text-gray-800">
            Total Amount
          </span>
          <span className="text-2xl font-bold text-[#0E7A81]"> {selectedPlan==="premium"?"500 BDT":"0"}</span>
        </div>
      </div>

      {/* Payment Method Card */}
      <div className="mb-6 border border-gray-200 bg-white p-6 shadow-sm rounded-lg">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Payment Method
        </h2>

    {/* Premium Plan Button */}
{selectedPlan === "premium" && (
  <button
    onClick={handlePayment}
    className="btn w-full bg-purple-800 hover:bg-purple-600 text-white h-14 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
  >
    Pay with SSLCommerz (Secure Payment)
  </button>
)}

{/* Free Plan Button */}
{selectedPlan === "free" && (
  <button
    onClick={handleFreePost} // new function for free plan
    className="btn w-full  bg-purple-800 hover:bg-purple-600 text-white h-14 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
  >
    Send for Admin Approval
  </button>
)}


        <p className="mt-4 text-center text-xs text-gray-500">
          <Lock className="inline h-3 w-3 mr-1" />
          Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  );
}
