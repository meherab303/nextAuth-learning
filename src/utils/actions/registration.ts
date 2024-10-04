
'use server'

import { TUserData } from "@/app/register/page"
import { register } from "module"


export const registration=async(data:TUserData)=>{
    const res=await fetch(`${process.env.BACKEND_URL}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store"
    })
    const registeredUserInfo=await res.json()
    return registeredUserInfo
}

