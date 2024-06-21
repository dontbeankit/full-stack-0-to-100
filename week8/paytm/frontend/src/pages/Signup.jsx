import { BottomWarning } from "../components/Comp_BottomWarning";
import { Button } from "../components/Comp_Button";
import { Heading } from "../components/Comp_Heading";
import { InputBox } from "../components/Comp_InputBox";
import { SubHeading } from "../components/Comp_SubHeading";

export function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                <Heading label="Welcome"/>
                <SubHeading label="Let's get started! Create your account by filling these details!"/>
                <InputBox label="First Name" placeholder="Ankit"/>
                <InputBox label="Last Name" placeholder="Rath"/>
                <InputBox label="Email" placeholder="ankit@abc.com"/>
                <InputBox label="Password" placeholder="******"/>
                <Button label="Create Account"/>
                <BottomWarning label="Already have an account?" buttonText="Log In" to="/Login"/>
            </div>
        </div>
        
    </div>
}