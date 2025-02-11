import { Navigate } from "react-router-dom";
import LoginAndSignWrapper from "../components/LoginAndSignWrapper";
import useAuthStore from "../store/useAuthStore";
import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isJwt, onLogin, isLoading } = useAuthStore();
  if (isJwt) {
    return <Navigate to="/" />;
  }
  const onFormSUbmit = (e) => {
    e.preventDefault();
    onLogin(loginData)
    console.log(loginData);
  };
  return (
    <LoginAndSignWrapper>
      <div className="py-4 px-3 flex flex-col justify-center h-full gap-4 rounded -2xl">
        <h1 className="text-4xl font-light text-center">Login</h1>
        <form onSubmit={onFormSUbmit}>
          <div className="flex flex-col px-3 py-2 gap-1 rounded-md">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              type="email"
              className="outline-none border-b py-1"
              onChange={(e) =>
                setLoginData((pre) => ({ ...pre, email: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col px-3 py-2 gap-1 rounded-md mt-4">
            <label htmlFor="password">Password</label>
            <input
              required
              id="password"
              type="password"
              className="outline-none border-b py-1"
              onChange={(e) =>
                setLoginData((pre) => ({ ...pre, password: e.target.value }))
              }
            />
          </div>
          <button
            type="submit"
            className="bg-white/90 text-black text-xl px-4 py-1 w-full rounded-lg mt-9 cursor-pointer font-bold"
          >
            {isLoading ? "loading" : "Login"}
          </button>
        </form>
      </div>
    </LoginAndSignWrapper>
  );
};

export default Login;
