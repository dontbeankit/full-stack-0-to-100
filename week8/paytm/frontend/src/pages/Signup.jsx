import { BottomWarning } from "../components/Comp_BottomWarning";
import { Button } from "../components/Comp_Button";
import { Heading } from "../components/Comp_Heading";
import { InputBox } from "../components/Comp_InputBox";
import { SubHeading } from "../components/Comp_SubHeading";
//bg-gradient-to-r from-slate-900 to-slate-700

export function Signup(){
    return <div className="bg-[url('../assets/herobg.jpg')] h-screen flex"> 
        <div className="flex flex-col px-4">
        <div className="rounded-lg bg-white w-90 text-center p-4 h-full px-8 my-4 flex items-center justify-center">
        <div className="w-full">
        <div className="text-left">
          <Heading label="Welcome to AkroPay"/>
          <SubHeading label="Let's get started! Create your account by filling these details!"/>
        </div>
        <InputBox label="First Name" placeholder="Ankit"/>
        <InputBox label="Last Name" placeholder="Rath"/>
        <InputBox label="Email" placeholder="ankit@abc.com"/>
        <InputBox label="Password" placeholder="******"/>
        <Button label="Create Account"/>
        <BottomWarning label="Already have an account?" buttonText="Log In" to="/Login"/>
      </div>
    </div>
                
            </div>
        </div>
}