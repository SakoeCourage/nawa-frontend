'use client'
import axios from "axios";
import getToken from "./getToken";

(async () => {
  const token = await getToken();
  if (token) {
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(token);
  }
})();

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
const Api = axios.create({
  baseURL: `${baseURL}`
})



export default Api;
