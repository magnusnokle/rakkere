import React from "react";
import logo from './log.png'
export default function Nav(){
    return(
        <>
        <div className="w-screen h-screen bg-black text-white font-black relative mt-1">
            <img src={logo} className="border w-5/12 m-auto" alt=""/>
            <div className=" flex flex-row justify-between text-4xl w-11/12 m-auto mt-20">
                <div className=" w-5/12 h-max m-auto ">
                    <div className="">
                        Theo
                    </div>
                    <div className="">
                        Stilling: Manager for rakkere
                    </div>
                    <div className="mt-8">
                        EPOST: theo.helgo@gmail.com
                    </div>
                    <div className="">
                        instagram: <a className=" border-b-2 hover:text-red-900 hover:border-red-900 duration-500">rakkere</a>
                    </div>
                </div>
                <div className="w-5/12 h-96 flex align-center justify-between">
                    <div className="w-7/12  m-auto h-5/6  bg-white "></div>
                </div>
            </div>
        </div>
        </>
    )
}