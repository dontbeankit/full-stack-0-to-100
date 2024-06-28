import { useState, useRef } from "react";
import { BottomWarning } from "../components/Comp_BottomWarning";
import { Button } from "../components/Comp_Button";
import { Heading } from "../components/Comp_Heading";
import { InputBox } from "../components/Comp_InputBox";
import { SubHeading } from "../components/Comp_SubHeading";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
//bg-gradient-to-r from-slate-900 to-slate-700 bg-[url('../assets/herobg.jpg')

export function Login(){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const toast = useRef(null);
  const navigate = useNavigate()

  async function LoginUser(){
    try{
      const res = await axios.post("http://localhost:3000/api/v1/user/login",{
        username,
        password
      });

      if(res && res.data.token){
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("firstName", res.data.firstName)
        localStorage.setItem("lastName", res.data.lastName)
        toast.current.show({ severity: 'success', summary: 'Welcome Back!', detail: 'Let\'s get back to paying at akroPay.' });
        navigate("/dashboard")
      }
      else{
        toast.current.show({ severity: "error", summary: 'Error', detail: 'Oops, something went wrong, please try again later.' });
      }
    }
    catch(e){
      console.log(e)
toast.current.show({ severity: "error", summary: 'Error', detail: 'Oops, something went wrong, please try again later.' });
    }
  }


    return <div 
    className="relative h-screen flex"
    style={{ backgroundImage: 'url(src/assets/herobg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 opacity-75"></div>
    <div className="relative flex flex-col px-4 w-full justify-center items-start">
    <Toast ref={toast} />
      <div className="rounded-lg bg-white w-90 text-center p-4 h-full px-8 my-4 flex items-center justify-center">
        <div className="w-full">
          <div className="text-left">
          <img src="akropay_logo.svg" style={{width: 100}} alt="Logo"/>
            <Heading label="Welcome Back"/>
            <SubHeading label="Glad to have you back, Login to access your account"/>
          </div>

          <InputBox onChange={(e)=>{setUsername(e.target.value)}} label="Email" placeholder="ankit@abc.com" type={"email"}/>
          <InputBox onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="******" type={"password"}/>

          <Button onClick={LoginUser} label="Login"/>
          <BottomWarning label="Already have an account?" buttonText="Sign Up" to="/signup"/>
        </div>
      </div>
    </div>
  </div>
}