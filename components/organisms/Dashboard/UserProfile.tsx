export default function userprofile(){
    return(
        <div>123456</div>
    )
}

// import Cookies from "js-cookie";
// import { useCallback, useEffect, useState } from "react";
// import Router, { useRouter } from "next/router";
// import jwtDecode from 'jwt-decode'
// import { setLogout } from "../../../services/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getUser } from "../../../services/user";
// import { UserLoginTypes, UserTypes } from "../../../services/data-types";



// const ROOT_API = process.env.NEXT_PUBLIC_API;
// const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
// export default function UserProfile() {
    
//     const router = useRouter();
//     const [sessionUserLogin, setSessionUserLogin] = useState<any>([]);
    
//     const getUserLogin = useCallback(async () => {
//         const tokenCookies = Cookies.get('token');
//         if (tokenCookies) {
//             // const jwtToken = Buffer.from(tokenCookies, 'base64').toString();
//             // const authLogin : UserLoginTypes = jwtDecode(jwtToken);
//             const authLogin : UserLoginTypes = jwtDecode(tokenCookies);
//             const response = await getUser(authLogin.id);
//             if (response.error){
//                 if (response.code== 401){
//                     Cookies.remove('token');
//                     Cookies.remove('refreshtoken');
//                     router.push('/auth/login');
//                 }
//             }else{
//                 setSessionUserLogin(response.data)
//                 Cookies.set('userlogin', authLogin.id);
//             }
//         }else{
//             //router.push('/auth/login');
//         }
//     }, []);
    
//     const onLogout = async () => {
//         const response = await setLogout();
//         if (response.error){
//             toast.error(response.message||"This user has no authentication !", {
//                 theme: "colored"
//                 })
//         }else{
//             Cookies.remove('token');
//             Cookies.remove('refreshtoken');
//             router.push('/auth/login');
//         }
//     }

//     useEffect(() =>{
//         getUserLogin();
//     }, [])
    
//   return (
//     <>
//         <div className="dropdown ms-sm-3 header-item topbar-user">
//             <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <span className="d-flex align-items-center">
//                     <img className="rounded-circle header-profile-user" src={`${ROOT_API}/${API_VERSION}/users/get-picture?path=${sessionUserLogin.profile_picture}`}  alt="Header Avatar" />
//                     <span className="text-start ms-xl-2">
//                         <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{sessionUserLogin.first_name} {sessionUserLogin.last_name}</span>
//                         <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{sessionUserLogin.group_name}</span>
//                     </span>
//                 </span>
//             </button>
//             <div className="dropdown-menu dropdown-menu-end">
//                 {/* item*/}
//                 <h6 className="dropdown-header">Welcome {sessionUserLogin.user_name}!</h6>
//                 <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
//                 <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
//                 <a className="dropdown-item" href="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
//                 <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
//                 {/* <a className="dropdown-item" href="/auth/login"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a> */}
//                 <button className="dropdown-item" onClick={onLogout}><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></button>
//             </div>
//         </div>
//     </>
//   )
// }
