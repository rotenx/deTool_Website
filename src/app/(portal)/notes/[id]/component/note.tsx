import React from 'react'
import style from "./notes.module.css"
import { BsArrowLeft } from 'react-icons/bs'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'
import Link from 'next/link'
export default function Note(props: any) {
   
const Dates = (time:any) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(time);

    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

    return (
        <div className={style.main}>
            <div className={style.mainHeader}>
                <Link href={"/dashboard"} passHref><div className={style.mainHeaderBack}>
                    <BsArrowLeft />
                </div></Link>
                <div className={style.mainHeaderDate}>
                    <p>{props.data[0]?.data[0]?.type == "Youtube" ? "Youtube Notes" : "Text Notes"}</p>
                </div>
            </div>
            <div className={style.mainHolder}>
                <div className={style.mainHolderOne}>
                    <div className={style.mainHolderOneImage}>
                        <Image src={props.data[0]?.data[0]?.image} alt='user' fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
                <div className={style.mainHolderTwo}>
                    <div className={style.mainHolderTwoDetailLink}>
                        <a href={`${props.data[0]?.data[0]?.type == "Youtube" ? `https://youtube.com/watch?v=${props.data[0]?._id}` : props.data[0]?._id}`} target="_blank" rel="noopener noreferrer"><p>{props.data[0]?.data[0]?.type == "Youtube" ? `https://youtube.com/watch?v=${props.data[0]?._id}` : props.data[0]?._id} <BiLinkExternal /> </p></a>
                    </div>
                    {props.data[0]?.data?.map((val: any, index: number) => {
                        return (<>
                            <div className={style.mainHolderTwoDetail}>
                                <div className={style.mainHolderTwoDetailBg} style={{ background: `${val?.color}` }}></div>
                                <p style={{ borderLeft: ` 4px solid ${val?.color}` }}><b>{val?.title}</b> <br /><br />
                                    {val?.description ?? ""}
                                    <br />
                                </p>
                                <div className={style.mainHolderTwoDetailSub}>
                                    <a href={`${val.type == "Youtube" ? `https://youtube.com/watch?v=${val.urlCode}&t=${Math.ceil(val?.selectedData?.time)}s` : `${val.urlCode}#${val.notes_token}`}`} style={{ fontSize: "13px" }} target='_blank' rel="noopener noreferrer"> {val.type == "Youtube" ? `https://youtube.com/watch?v=${val.urlCode.substring(0, 10)}` :  `${val.urlCode.substring(0, 30)}#${val.notes_token.substring(0, 3)}`}... <BiLinkExternal /> </a>
                                    <span>{Dates(val.time)}</span>
                                </div>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
