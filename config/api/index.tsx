import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
  isUploadFile?: boolean;
}

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const getTokenValue = async () => {
    return Cookies.get('token');
}
const getRefreshTokenValue = async () => {
    return Cookies.get('refreshtoken');
}
const setHeader = async (token: any, serverToken: any, isUploadFile: any)=>{
    
    let headers = {};
    if (token || serverToken){
        const tokenCookies = await getTokenValue();
        if (serverToken){
            if (isUploadFile){
                headers = { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    'Accept': 'application/json', 
                    'x-token': `${serverToken}`
                };
            }else {    
                headers = {
                    'x-token': `${serverToken}`,
                };
            }
            return headers;
        } else if (token){
            if (tokenCookies) {
                //const jwtToken = Buffer.from(tokenCookies, 'base64').toString();
                if (isUploadFile){
                    headers = { 
                        'Content-Type': 'application/x-www-form-urlencoded', 
                        'Accept': 'application/json', 
                        'x-token': `${tokenCookies}`
                    };
                }else {    
                    headers = {
                        'x-token': `${tokenCookies}`,
                    };
                }
            }
            return headers;
        }
    } else {
        return headers;
    }

}


export default async function callAPI({
    url, method, data, token, serverToken, isUploadFile=false
  }: CallAPIProps) {
    const response = await getDataAPI({
        url,
        method,
        data,
        token,
        isUploadFile
    }).catch((err) => err.response);
    
    if (response.code == 401) {
        const resRefresh = await getRefreshToken({
            url,
            method,
            data,
            token
        }).catch((err) => err.response);

        if (!resRefresh.error){
            const response = await getDataAPI({
                url,
                method,
                data,
                token
            }).catch((err) => err.response);
            if (response.code == 401){
                Cookies.remove('token');
                Cookies.remove('refreshtoken');
            }
            return response;
        } else {
            Cookies.remove('token');
            Cookies.remove('refreshtoken');
            return resRefresh;
        }
    }else {
        return response;
    }
}

export async function getDataAPI({
    url, method, data, token, serverToken, isUploadFile
  }: CallAPIProps){
    
    // const tokenCookies = Cookies.get('token');
    
    
    // const interval = setInterval(() => {
    //     if (Object.keys(headers).length > 0) {
    //         clearInterval(interval);
    //     }
    // }, 2000);

    const headers = await setHeader(token, serverToken, isUploadFile);
    if (token){
        if (headers != undefined && headers != null){
            const response = await axios({
                url,
                method,
                data,
                headers,
            }).catch((err) => err.response);

            if (response.status > 300) {
                const res = {
                error: true,
                code: response.status,
                message: response.data.message,
                data: response.data,
                };
                return res;
            } else {
                const { length } = Object.keys(response.data);
                const res = {
                    error: false,
                    code: response.status,
                    message: 'success',
                    data: length > 1 ? response.data : response.data.data,
                };
                 return res;
            }
        }
    } else {
        const response = await axios({
            url,
            method,
            data,
            headers,
        }).catch((err) => err.response);

        if (response.status > 300) {
            const res = {
            error: true,
            code: response.status,
            message: response.data.message,
            data: response.data,
            };
            return res;
        } else {
            const { length } = Object.keys(response.data);
            const res = {
                error: false,
                code: response.status,
                message: 'success',
                data: length > 1 ? response.data : response.data.data,
            };
        
            return res;
        }
    }
}

export async function uploadForm({
    url, method, data, token, serverToken,
  }: CallAPIProps){
    
    // let headers = {};
    // if (serverToken){
    //     headers = { 
    //         'Content-Type': 'application/x-www-form-urlencoded', 
    //         'Accept': 'application/json', 
    //         'x-token': `${serverToken}`,
    //         ...data.getHeaders()
    //     };
    // } else if (token){
    //     const tokenCookies = Cookies.get('token');
    //     if (tokenCookies) {
    //         //const jwtToken = Buffer.from(tokenCookies, 'base64').toString();
    //         headers = { 
    //             'Content-Type': 'application/x-www-form-urlencoded', 
    //             'Accept': 'application/json', 
    //             'x-token': `${tokenCookies}`,
    //             ...data.getHeaders()
    //         };
    //     }
    // }

    // const interval = setInterval((): void => {
    //     if (Object.keys(headers).length > 0) {
    //         clearInterval(interval);
    //     }
    // }, 1000);

    const headers = await setHeader(token, serverToken, true);
    const response = await axios({
        url,
        method,
        data,
        headers,
    }).catch((err) => err.response);

    if (response.status > 300) {
        const res = {
          error: true,
          code: response.status,
          message: response.data.message,
          data: response.data,
        };
        return res;
    } else {
        const { length } = Object.keys(response.data);
        const res = {
            error: false,
            code: response.status,
            message: 'success',
            data: length > 1 ? response.data : response.data.data,
        };
    
        return res;
    }
}

export async function getRefreshToken({
    url, method, data, token, serverToken,
  }: CallAPIProps) {
    const refreshTokenCookies = await getRefreshTokenValue(); //Cookies.get('refreshtoken');
    // let refreshToken="";
    // if (refreshTokenCookies) {
    //     refreshToken = Buffer.from(refreshTokenCookies, 'base64').toString();
    // }
    
    data = {
        token: refreshTokenCookies
    }

    //console.log(process.env.APPLICATION_NAME);
    
    let headers = {};
    url = `${ROOT_API}/${API_VERSION}/refresh-token`;
    const response = await axios({
        url,
        method : "POST",
        data,
        headers
    }).catch((err) => err.response);

    if (response.status > 300) {
        const res = {
          error: true,
          code: response.status,
          message: response.data.message,
          data: response.data,
        };
        return res;
    }else{
        const { access_token, refresh_token, exp } = response.data;
        // const tokenBase64 = Buffer.from(access_token).toString('base64');
        // const refreshTokenBase64 = Buffer.from(refresh_token).toString('base64');
        Cookies.set('token', access_token, { expires: exp });
        Cookies.set('refreshtoken', refresh_token, { expires: exp });

        const res = {
            error: false,
            code: response.status,
            message: 'success'
        };
    
        return res;
    }
  }