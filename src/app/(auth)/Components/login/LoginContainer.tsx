"use client"
import InputOne from "@/app/components/utils/Edit/Input/Input"
import styles from "./LoginContainer.module.css"
import { ButtonThree } from "@/app/components/utils/Edit/buttons/Buttons"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
export default function LoginContainer() {
    // router init
    const router = useRouter();
    // data init
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Handler = async (data: string, type: string) => {

        if (type == "email") {
            setEmail(data)
        } else if (type == "Password") {
            setPassword(data)
        }

    }

    const Login = async () => {
        console.log("ASDasd");

        let payload = {
            email: email,
            password: password
        }
        const FetchData = await fetch("https://jade-smoggy-barnacle.cyclic.app/login", {
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
                <h1>Welcome Back</h1>
                <p>please login to your account</p>
            </div>
            <div className={styles.mainTwo}>
                <InputOne name={"email"} id={"email"} placeholder={"email"} value={email} onChange={Handler} />
                <InputOne type={"password"} name={"Password"} id={"Password"} placeholder={"password"} value={password} onChange={Handler} />
                {/* <div className={styles.mainTwoItem}><p>forget password??</p></div> */}
                <ButtonThree name={"Login To Roten.X"} onClick={Login} />
                <div className={styles.mainTwoItemTwo}><p>or</p></div>
                <div className={styles.mainTwoItemSignup}>New to Roten.X? <Link href={"/signup"} passHref><p>Create Account</p></Link></div>
            </div>
        </div>
    )
}
