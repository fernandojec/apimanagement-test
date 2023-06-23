"use client"
import React from 'react';

import { useCallback, useEffect, useState } from 'react';
import { UserLoginTypes, UserTypes } from '../../services/data-types'
import { getAllUser, getUser } from '@/services/user';
import jwtDecode from 'jwt-decode'
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useSession } from "next-auth/react";
import Topbar from "@/components/organisms/Topbar/page";
import ClientList from '@/components/organisms/Client/ClientList';

const MyPage = () => {
    const [userClientList, setUserClientLList] = useState([]);
    const [isUserLoginClient, setIsUserLoginClient] = useState<boolean>(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();
    const {data: session} = useSession();
    const [parentList, setParentList] = useState<any>(); 

    const getParentList = useCallback(async () =>{
        const parentListData = [{
            parentTitle: "API Management",
            parentLink: `/`
        }];
        setParentList(parentListData);
    }, [])
    const getUserClient = useCallback(async () => {
        const response = await axiosAuth.get("/users")

        if(response.status==200){
            var resp = response.data;
            const dataClient = resp.data.filter(function(a: any) {
                    return a.group_id.toString() == "2";
                    });
                const authLogin : UserLoginTypes = jwtDecode(session?.user.accessToken);
                const responseUser = await axiosAuth.get(`/users/${authLogin.id}`);

                if (responseUser.data.data.group_name.toString().toLowerCase() == 'client'){
                    const dataResult = dataClient.filter(function(a: any) {
                        return a.id.toString() == authLogin.id;
                        }).sort(function(a: { id: number; }, b: { id: number; }) {
                        return a.id - b.id;
                    });
                    setUserClientLList(dataResult);
                    setIsUserLoginClient(true)
                } else {
                    
                    const dataResult = dataClient.sort(function(a: { id: number; }, b: { id: number; }) {
                        return a.id - b.id;
                    });
                    setUserClientLList(dataResult);
                    setIsUserLoginClient(false)
                }
        }else{
            
        }
    }, [axiosAuth,session]);

    useEffect(() =>{
        getUserClient();
        getParentList();

    }, [getUserClient,getParentList])

    console.log(userClientList,"$$$$$$$$$$$$$$$")

    return (
        <>
        <Topbar pageTitle='Clients' parentList={parentList} />
        <div className="main-content" id="main-content">
          <div className="page-content">
              <div className="container-fluid">
              <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-3">
                        {!isUserLoginClient && (
                            <a type="button" data-bs-toggle="modal" data-bs-target="#UserFormModal" 
                                data-bs-backdrop="static" data-bs-keyboard="false" className="btn btn-primary btn-label">
                                <i className="ri-add-fill label-icon align-middle fs-16 me-2"></i> User
                            </a>
                        )}
                    </div>
                    
                    <div className="card">
                        <div className="card-body">
                            <ClientList RawData={userClientList} /> 
                        </div>
                    </div>
              </div>
          </div>        
      </div>
        </>
    )
  }
  
  export default MyPage;