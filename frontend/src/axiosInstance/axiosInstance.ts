import axios from "axios";



const axiosInstance=axios.create({
    baseURL:"http://localhost:1337/api/"
})
export const axiosInstanePrivate=axios.create({
    baseURL:"http://localhost:1337/api/"
})

axiosInstanePrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;