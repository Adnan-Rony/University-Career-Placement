import React from "react";
import { XCircle } from "lucide-react";

export default function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <XCircle className="mx-auto text-red-600" size={64} />
        <h1 className="text-4xl font-bold text-red-600 mt-4 mb-2">Payment Failed</h1>
        <p className="text-gray-700 mb-6">
          Oops! Your payment could not be processed. Please try again.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
