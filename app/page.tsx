"use client";

import Button from "@/components/elements/Button";
import Dashboard from "@/components/organisms/Dashboard";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";

import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
//import API_URL from '@/types/config'


export default function page(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const axiosAuth = useAxiosAuth();

  const fetchPost = async () => {

    const res = await axiosAuth.get("/dashboard/AvgAccessByCountry?end=2023-06-30&start=2023-06-01")
    .then(response => {
      // Handle the response data
      setPosts(response.data);
      //console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
  };

  return (
    <div>it works</div>
  );
}
