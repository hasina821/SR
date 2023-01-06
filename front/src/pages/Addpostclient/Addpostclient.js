import React from "react";
import { Color } from "../../components/palette/color";
import {Grid} from "@mui/material";
import SmallNav from "../../components/Navbar/SmallNav";

export default function Addpostclient(){
    return(
        <>  
             <div class="overflow-hidden w-full min-h-screen font-sans" style={{background:Color.primary}}>
               <SmallNav/>
                <div class="relative mt-4">
                    <Grid container>
                        <Grid item xs={5} lg={5}>
                        <img
                                class="max-w-md lg:max-w-xl drop-shadow-2xl ml-2"
                                src="https://raw.githubusercontent.com/hasina821/ARATO/6e7234b6474aa471de10ad79341ad677bfe730a5/public/undraw_profile_re_4a55.svg"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={7} lg={7}>  
                            <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-3/4 px-4 bg-gray-400 opacity-60 rounded-2xl" >
                                <div className="relative flex flex-col min-w-0 break-words mb-6  rounded-lg  border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Postuler
                                    </h6>
                                    </div>
                                    <div className="btn-wrapper text-center">

                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    </div>
                                    <form >
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Nom
                                        </label>
                                        <input
                                        type="text"
                                        name='lastName'
                                        
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Nom"
                                        />
                                        
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Email
                                        </label>
                                        <input
                                        type="text"
                                        name='email'
                                        
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Email"
                                        />
                                        
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        CV
                                        </label>
                                        <input
                                        type="file"
                                        name='cv'
                                       
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Numéro de téléphone"
                                        />
                                        
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        LETTRE DE MOTIVATION
                                        </label>
                                        <input
                                        type="file"
                                        name='lm'
                                        
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Mot de passe"
                                        />
                                        
                                    </div>

                                    <div className="text-center mt-6">
                                        <input
                                        style={{background:Color.primary}}
                                        className="text-white  active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-gray-600 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 cursor-pointer"
                                        type="submit"
                                        
                                        value='Postuler'
                                        />
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
        )
}
       