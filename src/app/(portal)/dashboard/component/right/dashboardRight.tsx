import React from 'react'
import style from "./dashboardRight.module.css"
import Search from './Component/search/search'
import Card from './Component/Card/Card'
export default function DashboardRight(props: any) {

  return (
    <div className={style.main}>
      <div className={style.mainHolder}>
        <Search user={props?.user}/>
        <div className={style.mainContentHeading}>
          <h2>All Notes</h2>
        </div>
        <div className={style.mainContentHolder}>
          {props?.data?.map((val: any, index: number) => {
            return (
              <Card key={index} data={val} />
            )
          })}

        </div>
      </div>
    </div>
  )
}
