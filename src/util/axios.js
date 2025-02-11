import axios from "axios";
import Cookies from "js-cookie";

const server = axios.create({
    baseURL:"https://blog-management-system-api.vercel.app",
    headers:{
        Authorization: `Bearer ${Cookies.get("blogJwt")}`
    }
})


export default server