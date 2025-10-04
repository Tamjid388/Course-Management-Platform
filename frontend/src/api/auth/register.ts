import axiosInstance from "@/axiosInstance/axiosInstance"
import { TRegister } from "@/types/auth"


export const register=async({ username, email, password }:TRegister)=>{
    try {
        const response=await axiosInstance.post('auth/local/register',{
            username,
            email,
            password,
        })

        return response.data;
    } catch (error) {
        
    }
}