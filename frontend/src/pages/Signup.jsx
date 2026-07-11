import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import FloatingInput from "../components/FloatingInput.jsx"
import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }))
  }
  
  const onSubmit = async (e)=>{
        e.preventDefault();
        
        //Making axios request
        try{
            const res = await axiosObj.post("/auth/signup", {
                
            })
        } catch(error){

        }

    }
  return (
    <form className="flex flex-col items-center w-[50vw] mx-auto my-[5%]">
        <div className="w-13">
          <img src={Logo} className=""></img>
        </div>
        <h3 className="text-xl font-bold mt-3">Signup to get started</h3>
        <div className="relative flex flex-col gap-1  w-1/2 mt-3 *:mb-4">
          <div>
            <FloatingInput
              type="text"
              name="fullname"
              placeholder="Full Name"
              label="Full Name"
              onChange= {onChange}
            />

          </div>

          <div>
          <FloatingInput
              type="email"
              name="email"
              placeholder="email"
              label="Email"
            />
          </div>

          <div>
           <FloatingInput
              type="password"
              name="password"
              placeholder="password"
              label="Password"
            />
          </div>
        </div>

        <button type="submit" className="w-1/2 mt-8 bg-[#0064E0] hover:bg-[#0757D9] hover:cursor-pointer
         text-white py-2 rounded-[5px]">
          Signup
        </button>
        <div className="mt-3">
          <span className="text-sm text-gray-500">Already have an account?{" "} </span>
          <Link to="/login" className="text-indigo-500 hover:text-indigo-300 font-medium hover:underline">
            Login
          </Link>
        </div>
    </form>
  );
};

export default Signup;
