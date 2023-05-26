import React from 'react'
import style from "./dashboardleft.module.css"
import Image from 'next/image'
export default function DashboardLeft(props:any) {
    return (
        <div className={style.main}>
            <div className={style.mainHolder}>
                <Image src={`/images/${props?.data?.image}.png`} alt='image of user' width={150} height={150} style={{ borderRadius: "50%", objectFit: "cover" }} />
                <div className={style.mainHolderDetails}>
                    <h3>{props?.data?.name ?? "login"}</h3>
                    <span>{props?.data?.email ?? "login"}</span>
                </div>
                <br />
                <br />
                <div className={style.mainHolderDetails}>
                    <p>Roten.X DevTool Beta Version</p>
                    <p style={{opacity:".5"}}>0.0.1v</p>
                </div>
            </div>
        </div>
    )
}
