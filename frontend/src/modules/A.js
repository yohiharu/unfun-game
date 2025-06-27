"use client"

import { useState, useEffect, useRef } from "react"

export default function A(){
    var [text, setText] = useState("")
    const load_question = async () => {
        setText(fetch("http://localhost:8080/a/question").then(ret => ret.text()))
        ref.current.value=""
    }
    useEffect(() => {load_question()}, [])
    var ref = useRef()
    const handleDone = async() => {
        await fetch("http://localhost:8080/a/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "text": text, "answer": ref.current.value }),
        }) 
        await load_question()
    }
    const handleSkip = async() => {
        await load_question()
    }
    return(
        <>
            <p className="">A</p>
            <div className="w-full bg-green-600">
                <div className="w-full py-2 text-center">{text}</div>
                <div className="w-full py-2 bg-green-200">
                    <input ref={ref} className="mb-3 block w-2/3 mx-auto border border-gray-400 " type="text" placeholder="くそおもんないぶん"></input>
                    <div className="flex justify-center">
                        <button onClick={handleDone} className="border border-gray-400">DONE!</button>
                        <button onClick={handleSkip} className="border border-gray-400">Skip </button>
                    </div>
                </div>
            </div>
        </>

    )
}