import { register } from "@/api/auth/register";
import { TRegister } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Swal from "sweetalert2";

export const useRegister = () => {
     const router = useRouter();
     const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TRegister) => register(data),
    onSuccess: (data) => {
       queryClient.invalidateQueries({queryKey:["currentUser"]});
      Swal.fire({
        title: " Registration Successful",

        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#0E7A81",
      }).then(()=>{
        router.push("/login");
      })
       
    },
    onError: (error) => {
      Swal.fire({
        title: " Registration Failed",
        text: "Something went wrong, please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    },
  });
};
