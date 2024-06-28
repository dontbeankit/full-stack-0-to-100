import axios from "axios";
import { useState, useRef } from "react"
import { Toast } from "primereact/toast";
export const Send = ({id, fname, lname}) => {
    const [amt, setAmt] = useState(0);
    const toast = useRef(null);
    async function transferFunds(){
        if(amt>0){
            const res = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                to:id,
                amount:amt
              },{
                headers: {
                    Authorization: "Bearer "+ localStorage.getItem("token")
                }
            });
              if(res && res.data){
                toast.current.show({ severity: 'success', summary: 'Transaction Successful!', detail: amt+' was tranferred successfully to '+fname+"\s account." });
              }
              else{
                console.log()
                toast.current.show({ severity: "error", summary: 'Transaction Failed', detail: 'Oops, something went wrong, please try again later.' });
              }
        }
        else{
            toast.current.show({ severity: "error", summary: 'Error', detail: 'Please enter an amount.' });
        }
    }


    return <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 w-96 bg-white shadow-lg rounded-lg"
            >
                <Toast ref={toast} />
                <div class="flex flex-col space-y-1.5 p-4">
                <h2 class="text-2xl font-bold text-center text-gray-700">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="mx-auto max-w-max">
                    <div class="w-11 h-11 rounded-full bg-green-500 mx-auto flex items-center justify-center mb-4">
                    <span class="text-2xl text-white">{fname[0]}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-700">{fname+ " " + lname}</h3>
                </div>
                <div class="space-y-4 mt-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm text-slate-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        onChange={(e)=>{setAmt(e.target.value)}}
                        min="0" 
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={transferFunds} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 hover:bg-gray-700 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}