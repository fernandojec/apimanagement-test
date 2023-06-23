import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { UserTypes } from './data-types';


export async function getUser(id: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.get(`/users/${id}`)

    console.log(response,"getuser")
    return response.data;
}


export async function getAllUser() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.get(`/users`)
    return response.data;
}


export async function insertUser(data: UserTypes) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.post(`/users/`,data)
    return response.data;
  
}


export async function updateUser(id:string, data: UserTypes) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.put(`/users/${id}`,data)
    return response.data;
   
}


export async function updatePictureProfieUser(id:string, data: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.put(`/users/update-picture/${id}`,data,
        {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 
            }         
        }
    )
    return response.data;
   
}

export async function generateUserKey(id:string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.put(`/users/update-key/${id}`)
    return response.data;

}

export async function deleteUser(id:string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.delete(`/users/${id}`)
    return response.data;
    
}


export async function userVerificationbyPassword(data: {id:string, password: string}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.post(`/users/verify-password`,data)
    return response.data;
   
}

export async function userChangePassword(data: {id:string, password: string, current_password: string}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();

    const response = await axiosAuth.post(`/users/update-password`,data)
    return response.data;
}