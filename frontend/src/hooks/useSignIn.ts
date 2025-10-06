import { signIn } from "@/api/auth/signin";
import { TSignin } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSignIn = () => {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TSignin) => signIn(data),
     onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["currentUser"]});
    },
  });
};
