"use client";
import { axiosAuth } from "@/lib/axios";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session, status } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    console.log({ session }, "Console from axious")

    if (status == 'authenticated') {
      const requestIntercept = axiosAuth.interceptors.request.use(
        (config) => {
          if (!config.headers["x-token"]) {
            config.headers["x-token"] = `${session?.user?.accessToken}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      const responseIntercept = axiosAuth.interceptors.response.use(
        (response) => response,
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            try{

              let dataNewToken = await refreshToken();
              prevRequest.headers["x-token"] = `${session?.user.accessToken}`;
              return axiosAuth(prevRequest);
            }catch(e:any){
              signOut()
            };
          }
          return Promise.reject(error);
        }
      );

      return () => {
        axiosAuth.interceptors.request.eject(requestIntercept);
        axiosAuth.interceptors.response.eject(responseIntercept);
      };
    }
  }, [session, refreshToken, status]);

  return axiosAuth;
};

export default useAxiosAuth;