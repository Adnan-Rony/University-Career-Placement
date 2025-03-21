import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from '../../utils/Constant';
import axios from 'axios';
import toast from 'react-hot-toast';
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
          const res=await axios.post(`${USER_API_END_POINT}/login`,{
            headers:{
              "Content-Type":"application/json",
            },
            withCredentials:true,
          });
          if(res.data.sucess){
            navigate("/");
            toast.success(res.data.message);
          }
      }
      catch(err){
        console.log(err);
      }
  
    };
    




  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
      >
        <div className="my-2">
          <input
            className="input w-full border p-2 rounded"
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeEventHandler}
            placeholder="Enter your name"
          />
        </div>

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
        {/* <div className="flex items-center gap-2">
  <label className="label" htmlFor="profile">Profile</label>
  <input
    id="profile"
    type="file"
    accept="image/*"
    onChange={changeFileHandler}
    className=" file-input-primary w-full max-w-xs"
  />
</div> */}

        

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Sign Up
        </button>

        <span className="text-sm">
          Already have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            SignUp
          </Link>
        </span>
      </form>
    </div>
  )
}
