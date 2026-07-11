import {create} from "zustand"
import {axiosObj} from "../lib/axios"

const useAuthStore = create((set)=>({
    user: null,
    isCheckingAuth: true,
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
    }
}));

export default useAuthStore