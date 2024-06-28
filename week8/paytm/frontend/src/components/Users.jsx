import { useEffect, useState } from "react"
import { Button } from "../components/Comp_Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/payto?filter="+filter,{
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(response =>{
            setUsers(response.data.user)
        })
    },[filter])

    return <div className="mx-4 bg-white px-4 py-2 rounded-md">
        <div className="font-bold mt-6 text-lg text-gray-700">
            Send Money
        </div>
        <div className="my-2">
            <input type="text" onChange={(e)=>{setFilter(e.target.value)}} placeholder="Search users..." className="w-full px-2 py-2 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e)=>{navigate("/send?id="+user._id + "&fname="+user.firstName+"&lname="+user.lastName)}} label={"Send"} />
        </div>
    </div>
}