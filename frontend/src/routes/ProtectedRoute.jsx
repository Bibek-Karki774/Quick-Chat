import useAuthStore from "../store/auth.store";
import { Navigate, Outlet } from "react-router-dom";
import { Loader2 } from "lucide-react";

function ProtectedRoute(){
    const {user, isCheckingAuth} = useAuthStore();
    if(isCheckingAuth){
        return <Loader2 className="h-6 w-6 animate-spin" />
    }
    if(!user){
        return <Navigate to="/login" replace />
    }

    return <Outlet />;
}

export default ProtectedRoute