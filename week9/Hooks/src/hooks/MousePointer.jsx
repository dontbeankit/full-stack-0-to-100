import { useEffect, useState } from "react";

export const useMousePointer = ()=>{

    const [position, setPosition] = useState({x:0,y:0});

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove);
        //reset, equivalent to componentunmount
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    },[])
    return position;
}