"use client"

export default function A(){
    return(
        <>
            <p className="">A</p>
            <div className="w-full bg-green-600">
                <div className="w-full py-2 text-center">くそおもろいぶん</div>
                <div className="w-full py-2 bg-green-200">
                    <input className="block w-2/3 mx-auto border border-gray-400" type="text" placeholder="くそおもんないぶん"></input>
                    <div className="flex justify-center">
                        <button className="border border-gray-400">DONE!</button>
                        <button className="border border-gray-400">Skip </button>
                    </div>
                </div>
            </div>
        </>

    )
}