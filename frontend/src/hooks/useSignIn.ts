import { signIn } from "@/api/auth/signin";
import { TSignin } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  return useMutation({
    mutationFn: (data: TSignin) => signIn(data),
  });
};
