import { signOut } from "@/api/auth/signOut";
import {  useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries({queryKey:["currentUser"]});
    },
  });
};