import React from "react";
import { AlertCircle } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <AlertCircle className="mx-auto text-yellow-600" size={64} />
        <h1 className="text-4xl font-bold text-yellow-600 mt-4 mb-2">Payment Cancelled</h1>
        <p className="text-gray-700 mb-6">
          You cancelled the payment process. If this was a mistake, you can try again.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
