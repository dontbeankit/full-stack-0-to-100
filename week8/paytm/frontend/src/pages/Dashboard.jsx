import axios from "axios";
import { BalanceCard } from "../components/Comp_Balance";
import { Header } from "../components/Comp_Header";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard(){
    const [balance, setBalance] = useState(0)
    const [fname, setFname] = useState("")
    const navigate = useNavigate()

    async function getBalance(){
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        })
        if(res && res.data){
            setBalance(res.data.balance)
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
        setFname(localStorage.getItem("firstName"))
        getBalance()
    },[])

    return <div style = {{height:"100vh"}} className="bg-slate-100">
        <Header username={"Ankit"}/>
        <BalanceCard title={"Balance"} amount={balance}/>
        <Users/>
    </div>
}