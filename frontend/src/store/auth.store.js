import {create} from "zustand"
import axiosObj from "../lib/axios"
import Signup from "../pages/Signup";

const useAuthStore = create((set)=>({
    user: null,
    isCheckingAuth: true,
    isSigningup: false,
    errors: {},
    setErrors: (errors) => set({ errors }),
    checkAuth: async ()=>{
        try{
            const res = await axiosObj.get("/auth/check")
            set({user: res.data})
        
        } catch(error){
            console.log("Error in auth store: ", error.message)
            set({
                user: null
            })
        } finally{
            set({isCheckingAuth: false})
        }
    },

    signup: async(formData)=>{
        set({isSigningup: true, error:null})
        try{
            //Making axios request
            const res = await axiosObj.post("/auth/signup", formData)
           set({user: res.data})
        } catch(error){
            console.log("Error in signup: ", error.message)
             set({error: error.response?.data?.message || "Something went wrong. Please try again."
            })
        } finally {
            set({isSigningup: false})
        }
    }
}));

export default useAuthStore