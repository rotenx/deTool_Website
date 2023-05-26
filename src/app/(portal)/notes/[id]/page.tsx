import React from 'react'
import style from "./notes.module.css"
import Header from '../../component/header/header'
import DashboardLeft from '../../dashboard/component/left/dashboardLeft'
import Intro from '../../dashboard/component/intro/intro'
import Note from './component/note'
import { cookies } from 'next/headers';



async function Data(url:string) {
    const cookieStore = cookies();
    const result: any = cookieStore.get('token');

    if (result.value) {
        var payload = {
            userToken: result.value,
            urlCode:url
        }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');
        const dat: any = await fetch("http://localhost:8000/single-notes", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
        let data = await dat.json()

        return data
    } else {
        return { error: "no token" }
    }
}


async function UserData() {
    const cookieStore = cookies();
    const result: any = cookieStore.get('token');

    if (result.value) {
        var payload = {
            userToken: result.value
        }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        const dat: any = await fetch("http://localhost:8000/user-details", {
            method: "POST",
            headers:headers,
            body: JSON.stringify(payload)
        })
        let data = await dat.json()

        return data
    } else {
        return { error: "no token" }
    }
}
export default async function SingleNote({searchParams}:any) {
    const user = await UserData()
    const data = await Data(searchParams?.url)
    return (<>
        <Header></Header>
        <div className={style.main}>
            <div className={style.mainHolder}>
                <div className={style.mainHolderOne}>
                    <DashboardLeft data={user.data}/>
                    <Intro/>
                </div>
                <div className={style.mainHolderTwo}>
                    <Note data={data.data}/>
                </div>
            </div>
        </div>
    </>
    )
}
