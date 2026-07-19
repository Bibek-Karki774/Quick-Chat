import { create } from "zustand";
import axiosObj from "../lib/axios";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null,
  isCheckingAuth: true,
  isSigningup: false,
  isLogingin: false,
  errors: {},
  setErrors: (errors) => set({ errors }),
  checkAuth: async () => {
    try {
      const res = await axiosObj.get("/auth/check");
      set({ user: res.data });
    } catch (error) {
      console.log("Error in auth store: ", error.message);
      set({
        user: null,
      });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (formData) => {
    set({ isSigningup: true, errors: {} });
    try {
      //Making axios request
      const res = await axiosObj.post("/auth/signup", formData);
      set({
        user: res.data,
        errors: {},
      });
      toast.success(res.data.message);
      return true;
    } catch (error) {
      const { field, message } = error.response.data;
      console.log("Error in signup: ", error.message);
      set({ errors: { [field]: [message] } });
      return false;
    } finally {
      set({ isSigningup: false });
    }
  },

  login: async (formData) => {
    set({ isLogingin: true, errors: {} });
    try {
      //Making axios request
      const res = await axiosObj.post("/auth/login", formData);
      set({
        user: res.data,
        errors: {},
      });
      toast.success(res.data.message);
      return true;
    } catch (error) {
      const { field, message } = error.response.data;
      console.log("Error in login: ", error.message);
      if (!field) {
        set({ errors: {general : [message]} });
      } else {
        set({ errors: { [field]: [message] } });
      }
      return false;
    } finally {
      set({ isLogingin: false });
    }
  },

  logout: async ()=>{
    try{
      const res = await axiosObj.post("/auth/logout");
      if(res.status === 200){
        set({user: null})
        toast.success("Logout successful")
      }
    } catch(error){
      console.log("Error while logging out: ", error.message)
    }
  },
  updateProfile:  ()=>{

  }
}));

export default useAuthStore;
