import useAuthStore from "../store/auth.store";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {user, isCheckingAuth} = useAuthStore();
    if(isCheckingAuth){
        return <div>Loading...</div>
    }
    if(!user){
        return <Navigate to="/login" replace />
    }

    return children;
}

export default ProtectedRoute