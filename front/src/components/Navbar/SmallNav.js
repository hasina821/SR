import React from "react";
import { Link } from "react-router-dom";
import { Color } from "../palette/color";



export default function SmallNav () {
    return(
        <>
              <nav style={{background:Color.primary}} class="p-5 bg-white md:flex md:items-center md:justify-between">
                <div class="flex justify-between items-center ">
                <span class="text-2xl font-[Poppins] cursor-pointer">
                <Link to="/clientHome"> 
                    <a href="#" class="text-2xl font-semibold text-white">SMART-RECRUTE</a>
                </Link> 
                </span>
                <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                    <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
                </span>
                </div>
                {/* 
                <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                
                <button class="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
                    Get started
                </button>
                    <h2 class=""></h2>
                </ul>
                */}
            </nav>
        </>
    )
}