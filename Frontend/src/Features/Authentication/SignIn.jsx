import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from '../../utils/Constant';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import img from '../../assets/fb748fb1d5f7e2ac1eefdb618a0df004.png';
export const SignIn = () => {

   const [input, setInput] = useState({
      
      email: "",
      password: "",
      role: "",
      
    });
    const navigate=useNavigate();

    const changeEventHandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
  
   
  
    const submitHandler = async(e) => {
      e.preventDefault();
     
    
      try{
          const res=await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers:{
              "Content-Type":"application/json",
            },
            withCredentials:true,
          });
          if(res.data.success){
            navigate("/");
            alert(res.data.message);
          }
      }
      catch(err){
        console.log(err);
      }
  
    };
    




  return (
  <div>
 
      <div className="grid lg:grid-cols-2 gap-4 items-center justify-center lg:max-w-7xl mx-auto lg:w-1/2 border border-gray-100 shadow-2xl rounded-3xl p-4 my-10">
      
      <form
        onSubmit={submitHandler}
        className=""
      >
       

        <div className="my-2">
          <input
            className="input w-full border p-2 rounded"
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter your email"
          />
        </div>

        <div className="my-2">
          <input
            className="input w-full border p-2 rounded"
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center gap-4 my-5">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="student"
              checked={input.role === "student"}
              onChange={changeEventHandler}
              className="cursor-pointer"
            />
            <label>Student</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="recruiter"
              checked={input.role === "recruiter"}
              onChange={changeEventHandler}
              className="cursor-pointer"
            />
            <label>Recruiter</label>
          </div>
        </div>
   

        

        <button className="bg-[#6300b3] text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Login
        </button>

        

        <span className="text-sm">
          Already have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            SignUp
          </Link>
        </span>
      </form>

        <div>
          <img src={img} alt="" />
        </div>
      
    


    </div>
  </div>
  )
}
