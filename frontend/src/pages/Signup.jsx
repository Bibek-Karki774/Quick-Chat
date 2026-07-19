import React from "react";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import FloatingInput from "../components/Input.jsx";
import { useState } from "react";
import axiosObj from "../lib/axios.js";
import useAuthStore from "../store/auth.store.js";
import { Loader2 } from "lucide-react";
import { signupSchema } from "../../validations/auth.validation.js";
import { toast } from "react-toastify";


const Signup = () => {
  const navigate = useNavigate();
  const { signup, isSigningup, errors, setErrors } = useAuthStore(); // error is for server error from store and erros is for validation

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const validate = ()=>{
  const result = signupSchema.safeParse(formData)
  if(!result.success){
    const formattedErrors = {}
    result.error.issues.forEach((issue)=>{
      const field = issue.path[0]   // Fields like email, password etc
      if(!formattedErrors[field]){
        formattedErrors[field] = issue.message   // Keep only the first error for that field
      }
    })
    setErrors(formattedErrors);
    return false;
  }

  setErrors({})
  return true;
  
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if(errors[name]){
      setErrors({...errors, [name]:undefined})
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

     if (!validate()) return;
    const success = await signup(formData);
    if(success){
      navigate("/login")
    }
  };
  return (
    <>
     

      <form
        className="flex flex-col items-center w-[50vw] mx-auto my-[5%]"
        onSubmit={onSubmit}
      >
        <div className="w-13">
          <img src={Logo} className=""></img>
        </div>
        <h3 className="text-xl font-bold mt-3 mb-3x ">Signup to get started</h3>
        <div className="relative flex flex-col gap-1  w-1/2 mt-3 *:mb-4">
          
            <FloatingInput
              type="text"
              name="fullName"
              placeholder="Full Name"
              label="Full Name"
              onChange={onChange}
              value={formData.fullName}
              error ={errors.fullName}
            />
          

        
            <FloatingInput
              type="email"
              name="email"
              placeholder="email"
              label="Email"
              onChange={onChange}
              value={formData.email}
              error={errors.email}
            />
        

        
            <FloatingInput
              type="password"
              name="password"
              placeholder="password"
              label="Password"
              onChange={onChange}
              value={formData.password}
              error={errors.password}
            />
         
        </div>

        <button
          type="submit"
          disabled={isSigningup}
          className="w-1/2 mt-8 bg-[#0064E0] hover:bg-[#0757D9] hover:cursor-pointer
         text-white py-2 rounded-[5px] flex items-center justify-center"
        >
          {isSigningup ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            "Signup"
          )}
        </button>
        <div className="mt-3">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
          </span>
          <Link
            to="/login"
            className="text-indigo-500 hover:text-indigo-300 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
