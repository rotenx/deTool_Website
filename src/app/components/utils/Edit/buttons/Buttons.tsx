import styles from "./Buttons.module.css"
import {BsArrowRight, BsSave} from "react-icons/bs"
export default function ButtonOne(props:any) {
  return (
    <div className={styles.main}>
      <button title={props?.name}><span><BsSave/></span> {props?.name}</button>
    </div>
  )
}

export function ButtonFour(props:any) {
  return (
    <div className={styles.mainFour}>
      <button title={props?.name}> {props?.name}</button>
    </div>
  )
}

export function ButtonThree(props:any) {
  return (
    <div className={styles.mainThree} >
      <button title={props?.name} onClick={() => {props?.onClick ? props?.onClick() : ""}}>{props?.name} <span><BsArrowRight/></span></button>
    </div>
  )
}


export function ButtonTwo(props:any) {
  return (
    <div className={styles.mainTwo} >
      <button title={props?.name} type="button" ><span>{props?.icons}</span> {props?.name}</button>
    </div>
  )
}

