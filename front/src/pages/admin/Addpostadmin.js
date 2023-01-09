import React from "react";
import { Color } from "../../components/palette/color";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function AddpostAdmin(){
    return(
        <>
            <div  className=" w-full  px-4  opacity-60 rounded-2xl m-auto ">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form >
                    <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Nom de l'offre
                        </label>
                        <input
                            name="nom"
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                            
                        />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Domaine
                        </label>
                        <select name="statut" id="statut"  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150  w-full text-black">
                            <option value={0}>Compta & fi</option>
                            <option value={1}>Data & dev</option>
                            <option value={1}>Reseaux</option>
                            <option value={1}>BPO</option>
                            <option value={1}>RH</option>
                            <option value={1}>Rélation clientèle</option>
                        </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Poste basé à
                        </label>
                        <input
                            name="prenom"
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                        />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Nombre de eprsonne recherché
                        </label>
                        <input
                            type="number"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Urgent
                        </label>
                        <select name="statut" id="statut"  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150  w-full text-black">
                            <option value={0}>Oui</option>
                            <option value={1}>Non</option>
                        </select>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Commentaire
                        </label>
                        <input
                            name="sujet"
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                            rows="4"
                        />
                        </div>
                    </div>
                    <div className=" flex justify-between">
                        <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                            >
                            Pieces jointes
                            </label>
                            <input
                            type="file"
                            className=" border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer text-black"
                            />
                        </div>
                        </div>
                        <div className = "text-center mt-6 w-1/2" >
                            <button style={{background:Color.primary}} type="button" className = " text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Enregistrer">Enregistrer</button>
                        </div> 
                    </div>
                    </div>
                </form>
                    <div class="p-4 mb-4 text-sm text-white bg-green-600 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                    <span class="font-medium">Success alert!</span> Votre offre à éte ajouté avec succèss 
                    </div>
                </div>
            </div>
        </>
    )
}