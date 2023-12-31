import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API+'/'+process.env.NEXT_PUBLIC_API_VERSION;
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});