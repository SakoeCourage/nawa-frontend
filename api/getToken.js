import { getSession } from 'next-auth/react';
import Cookies from 'js-cookie';
export default async function getToken(){
    const token =  await getSession()
    if(token){
        Cookies.set('accessToken',token?.accessToken)
        console.log(token?.accessToken)
        return Promise.resolve(token?.accessToken)
    }else{
        return Promise.resolve('')
    }
}