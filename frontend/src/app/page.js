"use client"
import "./global.css"
import A from "@/modules/A";
import B from "@/modules/B";
import { useState } from "react";

export default function Home() {
  const [flag, setFlag] = useState("default")
  const clickA = () => {
    setFlag("A")
  }
  const clickB = () => {
    setFlag("B")

  }
  var Out = ()=><></>
  if (flag == "default"){
    Out = ()=>{return(
    <>  
      <div className="w-full">
        <button onClick={clickA} className="mx-3 bg-amber-200 p-4">A</button>
        <button onClick={clickB} className="mx-3 bg-amber-200 p-4">B</button>
      </div>
    </>
  )}
  }
  else if (flag == "A"){
    Out = ()=><A></A>
  }else if ( flag == "B" ){
    Out = ()=><B></B>
  }

  return (
    <>
      <button onClick={() => {setFlag("default")}}>restart</button>
      <Out></Out>
    </>

  );
}
