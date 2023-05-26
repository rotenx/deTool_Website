import React from 'react'
import Header from '../component/header/header'
import style from "./dashboard.module.css"
import DashboardLeft from './component/left/dashboardLeft'
import DashboardRight from './component/right/dashboardRight'
import Intro from './component/intro/intro'
import { cookies } from 'next/headers';
async function Data() {
    const cookieStore = cookies();
    const result: any = cookieStore.get('token');

    if (result?.value) {
        var payload = {
            userToken: result.value
        }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');
        const dat: any = await fetch("https://jade-smoggy-barnacle.cyclic.app/all-notes", {
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

    if (result?.value) {
        var payload = {
            userToken: result.value
        }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        const dat: any = await fetch("https://jade-smoggy-barnacle.cyclic.app/user-details", {
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
export default async function Dashboard() {
    const data = await Data()
    const user = await UserData()
    
    return (<>
        <Header></Header>
        <div className={style.main}>
            <div className={style.mainHolder}>
                <div className={style.mainHolderOne}>
                    <DashboardLeft data={user.data}/>
                    <Intro />
                </div>
                <div className={style.mainHolderTwo}>
                    <DashboardRight user={user.data} data={data.data}/>
                </div>

            </div>
        </div>
    </>
    )
}
