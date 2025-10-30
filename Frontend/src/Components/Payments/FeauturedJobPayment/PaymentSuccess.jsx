import React from 'react'
import { Link } from 'react-router'

export default function PaymentSuccess() {
  return (
   <div className="text-center mt-20 h-[100vh] space-y-3">
      <h1 className="text-3xl font-bold
       text-green-600"> Payment Successful!</h1>
      <p>Thank you for your payment</p>
      <button className='btn bg-purple-700 text-white'>
        <Link to={'/'}>
        Back to Home
        </Link>
      </button>
    </div>
  )
}
