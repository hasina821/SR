import React from "react";
import { Color } from "../../components/palette/color";
import {Grid} from "@mui/material";
import SmallNav from "../../components/Navbar/SmallNav";
import {useParams,useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";

const authUrl = "http://127.0.0.1:8000/api";


export default function Addpostclient(){
    let {refe,nom}=useParams();
    let navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        nom:Yup.string()
            .required("Votre nom est obligatoire"),
        prenom:Yup.string()
            .required("Votre prenom est obligatoire"),
        email: Yup.string()
          .required('Votre adresse mail est obligatoire'),
          //.email('Veuilez entrer une adresse mail valide'),
        es:Yup.string()
          .required("Votre etablissement superieur est obligatoire"),
        cv:Yup.mixed().required('Votre cv est obligatoire'),
        lm:Yup.mixed().required('Votre lettre de motivation est obligatoire'),
           
      });
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const HandleCreate = async(data) =>{
        await axios.post(`${authUrl}/candidature`, {
            "nom": data.nom,
            "prenom": data.prenom,
            "email": data.email,
            "es": data.es,
            "refoffre":refe,
            "cv": data.cv[0],
            "lm": data.lm[0],
        })
        
        .then(res => {
            if(res.data) navigate("/clientHome");
        }).catch((err)=>{
            console.log(err.message);
        })
        
    }
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
                                        {nom}
                                    </h6>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    </div>
                                    <form onSubmit={handleSubmit(HandleCreate)}>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Nom
                                        </label>
                                        <input
                                        {...register("nom")}
                                        type="text"
                                        name='nom'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Nom"
                                        />
                                        <p className="text-red-500">{errors.nom?.message}</p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Prenom
                                        </label>
                                        <input
                                        {...register("prenom")}
                                        type="text"
                                        name='prenom'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Email"
                                        />
                                        <p className="text-red-500">{errors.prenom?.message}</p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Email
                                        </label>
                                        <input
                                        {...register("email")}
                                        type="email"
                                        name='email'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Votre mail"
                                        />
                                        <p className="text-red-500">{errors.email?.message}</p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        Etablissement supérieur
                                        </label>
                                        <input
                                        {...register("es")}
                                        type="text"
                                        name='es'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Nom de votre etablissemenet supérieur"
                                        />
                                        <p className="text-red-500">{errors.es?.message}</p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        CV
                                        </label>
                                        <input
                                        {...register("cv")}
                                        type="file"
                                        name='cv'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Mot de passe"
                                        />
                                        <p className="text-red-500">{errors.cv?.message}</p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                        >
                                        lETTRE DE MOTIVATION
                                        </label>
                                        <input
                                        {...register("lm")}
                                        type="file"
                                        name='lm'
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                        placeholder="Mot de passe"
                                        />
                                        <p className="text-red-500">{errors.lm?.message}</p>
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
       