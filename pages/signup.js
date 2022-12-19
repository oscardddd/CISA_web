import { useId, useState } from "react";
import Link from 'next/link'
import { Input, Button} from "antd";
import styles from "./login.module.css"


export default function signup(){
    const [cname, setCName] = useState("")
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const signup = async(e)=>{
        e.preventDefault()
        if(!cname ||!fname ||!lname ||!email ||!password){
            console.log("All fields are required")
           
        }
        else{
            let res = await fetch('http://localhost:4000/user/test')
            let data = await res.json()
            console.log(data)
        }
        console.log(cname,fname,lname,email,password)
    }
    return(
        <div className={styles.signup}>
            <h1>注册</h1>
            <Input className={styles.input} type="text" placeholder="中文名" onChange={(e)=>setCName(e.target.value)}></Input>
            <Input className={styles.input} type="text" placeholder="First Name" onChange={(e)=>setFName(e.target.value)}></Input>
            <Input className={styles.input} type="text" placeholder="Last Name" onChange={(e)=>setLName(e.target.value)}></Input>
            <Input className={styles.input} type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></Input>
            <Input className={styles.input} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></Input>
            <Button className={styles.input} type="primary" size="large" onClick={signup}>Submit</Button>
        </div>

    )
}