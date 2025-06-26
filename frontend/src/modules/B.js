"use client"

import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'
export default function B(){
    const clicker = () => { 
        alert("hoeghoge")
    }
    const [value, setValue] = useState(50)
    const handleSliderChange = (newValue) => {
        setValue(newValue); // スライダーの値を更新
    };
    return(
        <>
            <p>B: {value}</p>
            <div className="w-full bg-green-600">
                <div className="w-full py-2 text-center">くそおもろいぶん</div>
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
                    <div className="flex justify-center">
                        <button onClick={clicker} className="border border-gray-400">DONE!</button>
                        <button className="border border-gray-400">Skip </button>
                    </div>
                </div>
            </div>
        </>
    )
}