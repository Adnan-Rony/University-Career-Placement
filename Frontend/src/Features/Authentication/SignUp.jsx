import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { USER_API_END_POINT } from "../../utils/Constant";
import toast, { Toaster } from 'react-hot-toast';

export const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate=useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phone",input.phone);
    formData.append("password",input.password);
    formData.append("role",input.role);
   if(input.file){
     formData.append("file",input.file);
    try{
        const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
          headers:{
            "Content-Type":"multipart/form-data",
          },
          withCredentials:true,
        });
        if(res.data.success){
          navigate("/SignIn");
          alert(res.data.message);
        }
    }
    catch(err){
      console.log(err);
      toast.error(err.response.data.message);
    }

  };
  }







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
            type="text"
            name="phone"
            value={input.phone}
            onChange={changeEventHandler}
            placeholder="Enter your phone number"
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
        <div className="flex items-center gap-2">
  <label className="label" htmlFor="profile">Profile</label>
  <input
    id="profile"
    type="file"
    accept="image/*"
    onChange={changeFileHandler}
    className=" file-input-primary w-full max-w-xs"
  />
</div>

        

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Sign Up
        </button>
       

        <span className="text-sm">
          Already have an account?{" "}
          <Link to="/SignIn" className="text-blue-600 hover:underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
  }
