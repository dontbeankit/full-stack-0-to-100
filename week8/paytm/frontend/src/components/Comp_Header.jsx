import { Link, useNavigate } from "react-router-dom";

import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from "primereact/toast";
         

export function Header({username}){

    const toast = useRef(null);
    const navigate = useNavigate()
    const accept = () => {
        localStorage.clear()
        toast.current.show({ severity: 'info', summary: 'Logged Out', detail: 'You have been logged out', life: 3000 });
        navigate("/login")
    }


    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to log out?',
            header: 'Log Out?',
            icon: 'pi pi-info-circle',
            position,
            accept
        });
    };

    return <div className="bg-white shadow flex justify-between py-2">
        <Toast ref={toast} />
        <ConfirmDialog/>
        <div className="flex flex-col justify-center h-full ml-4 my-auto">
        <Link to={"/dashboard"}><img src="akropay_logo.svg" style={{width: 100}} alt="Logo" className=" "/></Link>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-gray-600">
                {username}
            </div>
            <div onClick={() => confirm('top-right')} className="hover:cursor-pointer rounded-full h-11 w-11 bg-cyan-500 flex justify-center mr-4">
                <div className="flex flex-col text-slate-200 justify-center h-full text-xl">
                    A
                </div>
            </div>
        </div>
    </div>

}