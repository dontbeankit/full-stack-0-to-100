import { useParams } from "react-router-dom";
import { Send } from "../components/Comp_SendMoney";
import { Header } from "../components/Comp_Header";
import { useEffect } from "react";

export function SendMoney(){

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    },[])

    const queryParameters = new URLSearchParams(window.location.search)
    
    return <div>
        <Header/>
        <Send 
    id={queryParameters.get("id")}
    fname={queryParameters.get("fname")}
    lname={queryParameters.get("lname")} />
        </div>
}