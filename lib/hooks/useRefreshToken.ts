"use client";

import axios from "@/lib/axios";
import { signIn, signOut, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post("/refresh-token", {
      token: session?.user.refreshToken,
    });
    if (res.status == 200){
      if (session) session.user.accessToken = res.data.accessToken;
      else signIn();
      return  res.data
    }else{
      throw new Error("invalid refresh token")
    }
  };
  return refreshToken;
};