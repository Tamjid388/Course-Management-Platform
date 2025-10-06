"use client"
import { CurrentUser } from "@/api/auth/currentuser";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const useCurrentUser = () => {
  return useQuery(
    {
    queryKey: ["currentUser"],
    queryFn: CurrentUser,
    //  staleTime: 5 * 60 * 1000, 
    // refetchOnWindowFocus: false,
}

);
};
