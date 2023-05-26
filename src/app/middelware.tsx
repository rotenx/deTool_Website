'use client'
import { useRouter } from 'next/navigation'
export default function Middelware(props:any) {
    const router = useRouter()
    if(props.token){

    }else{
        router.push("/login")
    }
  return null
}
