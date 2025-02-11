import { create } from "zustand";
import Cookies from "js-cookie";
import server from "../util/axios";
import { cache } from "react";

const useAuthStore = create((set, get) => ({
  isJwt: Cookies.get("blogJwt") !== undefined,
  isLogin: false,
  checkAuth: async () => {
    if(get().isLogin){
        return
    }
    set({isLoading: true}) 
    try{
        const res = server.get("/api/users/user")
        console.log((await res).data);
    }catch(err){
        console.log(err);
    }finally{
        set({isLoading: false})
    }
        
    
  },
  isLoading: false,
  onLogin: async (data) => {
    set({ isLoading: true });
    try {
      const res = await server.post("/api/auth/login", data);
      Cookies.set("blogJwt", res.data.token, { expires: 1 });
      set({isLogin: true, isJwt: true})
    } catch (err) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
