import axios from "axios";



const axiosInstance=axios.create({
    baseURL:"http://localhost:1337/api/"
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.url?.startsWith("/users")) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;