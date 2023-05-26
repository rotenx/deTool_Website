"use client"
import InputOne from "@/app/components/utils/Edit/Input/Input"
import styles from "./SignupContainer.module.css"
import { ButtonThree } from "@/app/components/utils/Edit/buttons/Buttons"
import SocialLogin from "../SocialLogin/SocialLogin"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';


export default function LoginContainer() {
    const router = useRouter();

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const Handler = (data:string,type:string) => {
        if(type == "email") {
            setEmail(data)
        }else if(type == "Password"){
            setPassword(data)
        }else if(type == "Name"){
            setName(data)
        }else if(type == "phone"){
            setPhone(data)
        }
    }

    const SignUp = async () => {
        console.log("ASDasd");

        let payload = {
            name: name,
            email: email,
            password: password
        }
        await fetch("https://jade-smoggy-barnacle.cyclic.app/user", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                // Process the JSON data received in the response
                if (data.status) {
                    let cookie = `token=${data.token};`;
                    cookie += "path=/;";
                    cookie += `max-age=${60 * 60 * 24 * 365};`;
                    document.cookie = cookie;
                    router.push("/dashboard")
                }else{
                    alert("email or password is wrong")
                }
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch request
                console.error('Error:', error);
            });

    }
    return (
        <div className={styles.main}>
            <div className={styles.mainOne}>
                <h1>Hello buddy</h1>
                <p>Join us the largest community</p>
            </div>
            <div className={styles.mainTwo}>
                <InputOne  placeholder={"Full Name"} id={"Name"} value={name} onChange={Handler}/>
                <InputOne  placeholder={"Email"} id={"email"} value={email} onChange={Handler}/>
                <InputOne  placeholder={"password"} type={"password"} id={"Password"} value={password} onChange={Handler}/>
                <ButtonThree name={"Join Roten.X"} onClick={SignUp} />
                <div className={styles.mainTwoItemTwo}><p>or</p></div>
                <div className={styles.mainTwoItemSignup}>already Have Account? <Link href={"/login"} passHref><p>Login Now</p></Link></div>
            </div>
        </div>
    )
}
