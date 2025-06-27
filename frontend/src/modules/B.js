"use client"

import * as Slider from '@radix-ui/react-slider'
import { useEffect, useState } from 'react'
export default function B(){
    const handle_done = async () => { 
        await fetch("http://localhost:8080/b/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "text": text, "answer": value }),
        }) 
        await load_question()
    }
    const handle_skip = () => {
        load_question()
    }
    const [value, setValue] = useState(50)
    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };
    const [text, setText] = useState("")
    var load_question = () => {
        setText(fetch("http://localhost:8080/b/question").then(ret => ret.text()))
    }
    useEffect(() => load_question(), [])
    return(
        <>
            <p>B</p>
            <div className="w-full bg-green-600">
                <div className="w-full py-2 text-center">{text}</div>
                <div className="w-full py-2 bg-green-200">
                    <div className="flex justify-center">
                        <span>real</span>
                        <Slider.Root
                        className="relative flex items-center select-none touch-none w-64 h-5"
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        aria-label="slider example"
                        onValueChange={handleSliderChange}
                        >
                        <Slider.Track className="bg-gray-300 relative flex-1 rounded-full h-2">
                            <Slider.Range className="absolute bg-green-600 rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb className="block w-5 h-5 bg-white shadow-md rounded-full" />
                        </Slider.Root>
                        <span>not real</span>
                    </div>
                    <p className="text-center">{value}</p>
                    <div className="flex justify-center">
                        <button onClick={handle_done} className="border border-gray-400">DONE!</button>
                        <button onClick={handle_skip} className="border border-gray-400">Skip </button>
                    </div>
                </div>
            </div>
        </>
    )
}