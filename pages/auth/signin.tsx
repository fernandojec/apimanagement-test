"use client"

import Image from 'next/image';
import { useRef , useState,} from 'react';
import { useRouter } from 'next/router';


import '@/styles/libs/jsvectormap/css/jsvectormap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/icons.min.css';
import '@/styles/app.min.css';
import '@/styles/custom.min.css';
import 'feather-icons/dist/feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';

// eslint-disable-next-line react-hooks/rules-of-hooks


export default function signin(){
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const nextInputRef = useRef<HTMLInputElement>(null);
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [user_name, setUserName] = useState('');
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [password, setPassword] = useState('');
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [error, setError] = useState(null);
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const router = useRouter();
 
     const handleKeyDown = (event:any) => {
         if (event.key === 'Enter') {
             const { id } = event.target;
             console.log(id)
             if (id == 'username' || id == 'password'){
                 if(event.target.value == ''){
                     toast.error("Please input your "+id+" !!", {
                         theme: "colored"
                       })
                       event.preventDefault();
                 }else{
                    if(id == nextInputRef.current?.id){
                        onSubmit()
                    }else{
                        nextInputRef.current?.focus();
                    }
                     event.preventDefault();
                 }
             }
         }
       };
 
       const onSubmit = async () => {

        console.log(user_name,password)
 
         if (!user_name || !password){
             toast.error("Please input your UserName and Password !!", {
                 theme: "colored"
               })
         } else {

            const result = await signIn('credentials', {
                username: user_name, 
                password: password,
                redirect: false, // Prevent automatic redirect on authentication
              });

              console.log(result)
 
              if (result?.error) {
                toast.error(result?.error, {
                    theme: "colored"
                  })
                // Authentication failed
              } else {
                toast.success('Login Succeed!', {
                    onClose: () => {
                        location.replace('/')
                    //   setTimeout(() => {
                    //     router.push('/'); // Redirect to another page after delay
                    //   }, 1000); // Delay in milliseconds (adjust as needed)
                    },
                    autoClose:500
                  });
              }
 
             // const response = await setLogin(data);
             // if (response.error){
             //     toast.error(response.message||"This user has no authentication !", {
             //         theme: "colored"
             //       })
             // }else{
             //     const { access_token, refresh_token, exp } = response.data;
             //     //const tokenBase64 = Buffer.from(access_token).toString('base64');
             //     //const refreshTokenBase64 = Buffer.from(refresh_token).toString('base64');
             //     Cookies.set('token', access_token, { expires: exp });
             //     Cookies.set('refreshtoken', refresh_token, { expires: exp });
             //     if (Cookies.get('token') != undefined){
             //         router.push('/');
             //     }
             // }
         }
     }

    return(
        <>
         <ToastContainer />
        <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
            <div className="bg-overlay"></div>
            <div className="auth-page-content overflow-hidden pt-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card overflow-hidden border-0">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="p-lg-5 p-4 auth-one-bg h-100">
                                            <div className="bg-overlay"></div>
                                            <div className="position-relative h-100 d-flex flex-column">
                                                <div className="mb-4">
                                                <a href="index.html" className="d-block">
                                                <Image src="/images/logo-light.png" width={100} alt="" height={18}  />
                                                    </a>
                                                </div>
                                                <div className="mt-auto">
                                                    <div className="mb-3">
                                                        <i className="ri-double-quotes-l display-4 text-success"></i>
                                                    </div>

                                                    <div id="qoutescarouselIndicators" className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner text-center text-white pb-5">
                                                            <div className="carousel-item active">
                                                                <p className="fs-15 fst-italic">&quot; Great! Clean code, clean design, easy for customization. Thanks very much! &quot;</p>
                                                            </div>
                                                            <div className="carousel-item">
                                                                <p className="fs-15 fst-italic">&quot; The theme is really great with an amazing customer support.&quot;</p>
                                                            </div>
                                                            <div className="carousel-item">
                                                                <p className="fs-15 fst-italic">&quot; Great! Clean code, clean design, easy for customization. Thanks very much! &quot;</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="p-lg-5 p-4">
                                            <div>
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p className="text-muted">Sign in to continue to {process.env.NEXT_PUBLIC_APPLICATION_NAME}.</p>
                                            </div>

                                            <div className="mt-4">
                                                <form action={'http://localhost:3000/api/auth/callback/credentials'} method='POST'>

                                                    <div className="mb-3">
                                                        <label htmlFor="username" className="form-label">Username</label>
                                                        <input type="text" className="form-control" id="username" placeholder="Enter username" 
                                                            onChange={(event) => setUserName(event.target.value)} onKeyDown={handleKeyDown}/>
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <a href="auth-pass-reset-cover.html" className="text-muted">Forgot password?</a>
                                                        </div>
                                                        <label className="form-label" htmlFor="password-input">Password</label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <input type="password" ref={nextInputRef} className="form-control pe-5 password-input" placeholder="Enter password" id="password" 
                                                            onChange={(event) => setPassword(event.target.value)} onKeyDown={handleKeyDown}/>
                                                            <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                    <button onClick={onSubmit} className="btn btn-success w-100" type="button">Sign In</button>
                                                        <input type='submit' value={'Sign In'}/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}