import { CheckCircle2, Lock } from "lucide-react";
import React from "react";
import { useCurrentUser } from "../../../hooks/useAuth";
import Loading from "../../../Components/loading/Loading";

export default function FeaturedPayment() {
  const {data,isPending}=useCurrentUser()
  console.log(data);
  const currentuser=data?.user?.email
  const userdata={
   email:currentuser,
   name:data?.user?.name,
   userId:data?.user?._id,
   

  }
  console.log(currentuser);
  if(isPending){
    return <Loading/>
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Selected Plan Card */}
      <div className="mb-6 border border-gray-200 p-6 shadow-sm rounded-lg bg-white">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Selected Plan</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your chosen job posting package
            </p>
          </div>
          <div className="rounded-full bg-purple-100 p-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
          </div>
        </div>

        <div className="mt-4 rounded-lg p-4  bg-purple-100/45">
          <p className="text-sm text-gray-600">Plan Type</p>
          <p className="mt-1 text-2xl font-bold text-gray-800">Premium Job Post</p>
          <p className="mt-2 text-sm text-gray-500">
            Get featured placement, priority visibility, and advanced analytics
            for 30 days
          </p>
        </div>
      </div>

      {/* Payment Summary Card */}
      <div className="mb-6 border border-gray-200 bg-white p-6 shadow-sm rounded-lg">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Payment Summary</h2>

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
            <span className="font-medium text-gray-800">$25.00</span>
          </div>
        </div>

        <div className="space-y-3 py-4 border-b border-gray-200">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Tax (10%)</span>
            <span className="font-medium text-gray-800">$2.50</span>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <span className="text-base font-semibold text-gray-800">Total Amount</span>
          <span className="text-2xl font-bold text-[#0E7A81]">$27.50</span>
        </div>
      </div>

      {/* Payment Method Card */}
      <div className="mb-6 border border-gray-200 bg-white p-6 shadow-sm rounded-lg">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Payment Method</h2>

        <button
          className="btn w-full  bg-purple-800 hover:bg-purple-600 text-white h-14 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          Pay with SSLCommerz (Secure Payment)
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          <Lock className="inline h-3 w-3 mr-1" />
          Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  );
}
