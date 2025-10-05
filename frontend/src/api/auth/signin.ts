import axiosInstance from "@/axiosInstance/axiosInstance";
import { TSignin } from "@/types/auth";

export const signIn = async ({ email, password }: TSignin) => {
  try {
    const response = await axiosInstance.post("auth/local", {
      identifier:email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log("Login Error");
  }
};
