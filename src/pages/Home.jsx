import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";
const Home = () => {
  const { isJwt, checkAuth, isLoading } = useAuthStore();

  if (!isJwt) {
    return <Navigate to="/login" />;
  }

  useEffect(()=>{
    checkAuth()
  },[])

  return <div className="text-red-800">{isLoading ? "loading" : "Home"}</div>;
};

export default Home;
