
import { useCallback, useEffect, useState } from "react";
import router from "next/router";
import jwtDecode from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from "../../../services/user";
import { UserLoginTypes, UserTypes } from "../../../services/data-types";
import { signOut, useSession } from "next-auth/react";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";



export default function UserProfile() { 
    const{data:session,status} = useSession();
    const [sessionUserLogin, setSessionUserLogin] = useState<any>([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();


    const getUserLogin = useCallback(async () => {
        const authLogin : UserLoginTypes = jwtDecode(session?.user.accessToken ?? "");
        const response = await axiosAuth.get("/users/"+authLogin.id)

        if(response.status == 200){
            setSessionUserLogin(response.data.data)
        }else{

        }

       console.log(sessionUserLogin,"%%%%%")

}, [session,axiosAuth]);
      
    const onLogout = async () => {
        const response = await axiosAuth.post("logout");

        if(response.status == 200){
            signOut()
        }else{
            console.log("Logout: ",response)
        }

    }

    useEffect(() =>{
        if(status =='authenticated'){
            getUserLogin();
        }
    }, [getUserLogin,status])
    
  return (
    <>
        <div className="dropdown ms-sm-3 header-item topbar-user">
            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="d-flex align-items-center">
                    <img className="rounded-circle header-profile-user" src={`${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VERSION}/users/get-picture?path=${sessionUserLogin.profile_picture}`}  alt="Header Avatar" />
                    <span className="text-start ms-xl-2">
                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{sessionUserLogin.first_name} {sessionUserLogin.last_name}</span>
                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{sessionUserLogin.group_name}</span>
                    </span>
                </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <h6 className="dropdown-header">Welcome {sessionUserLogin.user_name}!</h6>
                <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                <a className="dropdown-item" href="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
                <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
                {/* <a className="dropdown-item" href="/auth/login"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a> */}
                <button className="dropdown-item" onClick={onLogout}><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></button>
            </div>
        </div>
    </>
  )
}
