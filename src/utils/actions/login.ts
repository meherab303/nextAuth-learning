'use server'

export type TLoginUser={
    email:string
    password:string
}
export const login=async(data:TLoginUser)=>{
   const res=await fetch(`${process.env.BACKEND_url}/login`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
    cache:"no-store"
   })
   const loginInfo=await res.json()
    return loginInfo
}