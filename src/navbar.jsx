import React from "react";

export default function Nav() {
    return(
        <>
        <div className='w-screen h-max sticky  font-black text-white bg-black  top-0'>
            <h1 className=" flex-row justify-between w-9/12 m-auto text-4xl lg:flex hidden">
            <a href="#video" className='hover:text-red-900 duration-500	' >VLOG</a>
            <a className='hover:text-red-900 duration-500	' href="#musikk">MUSIKK</a>
            <a className='hover:text-red-900 duration-500	' href='https://bigdipper.no/rakkere-records-inc-and-ltd/raklp001/rakkere-sfo-lp'>BUTIKK</a>
            <a className='hover:text-red-900 duration-500	'  >KONTAKT</a>
        </h1>
        <div class="flex lg:hidden">
    
  </div>

        

      </div>
    
        </>

        
    )
}