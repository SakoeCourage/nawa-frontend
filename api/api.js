'use client'
import axios from "axios";
import Cookies from 'js-cookie'
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

// Api.interceptors.request.use((config) => {
// console.log(localStorage.getItem('accessToken'))
//   const accessToken = localStorage.getItem('accessToken');
//   if (accessToken) {
//     console.log(accessToken)
//     Api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

export default Api;
