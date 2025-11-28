import { ThreeDots } from "react-loader-spinner";
import { Spinner } from "../../Components/loading/loader/Spinner";
import { StudentTheme } from "../portfolio/Categories/Student/StudentTheme";
import { useState } from "react";

export const Demo = ({name}) => {
const [count,setCount]=useState({ name: 'Alice', age: 30 })
    function handleClick() {
      setCount(prev=>({
        ...prev,
        age:prev.age+1})); 
    }
    console.log(count);
  return (
    <div className="py-16 container mx-auto">
{/* <StudentTheme/> */}
<button className="btn" onClick={handleClick}>click</button>
    </div>
  );
};
