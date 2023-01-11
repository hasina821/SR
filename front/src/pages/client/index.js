import {useEffect,useState} from "react";
import {Box, Typography,Modal,Container, Grid,Stack} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {styled} from "@mui/styles";
import PlayIcon from "../../components/logo/play";
import SpeakerPhoneIcon from "../../components/logo/speaker";
import ShoppingBagIcon from "../../components/logo/shopping";
import ChipIcon from "../../components/logo/Chip";
import ChartIcon from "../../components/logo/chart";
import { Color } from "../../components/palette/color";
import { Link } from "react-router-dom";
import {Link as Lank} from "react-scroll";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import UserDropdown from "../../components/dropdown/userDropDown"
import { useSelector } from "react-redux";
import { FetchOffre} from "../../toolkit/offres";
import { useDispatch } from "react-redux";

import PostModal from "../../components/Modal/PostModal";


export const Styleddivone=styled('h4')({
    textAlign:'center',
    color:'white',
    fontWeight:"bold",
    fontSize:"18px"
})
export const StyleddivTwo=styled('div')({
    align:'left'
})

export const StyledTitle =styled('p')({
    textAlign:'center',
    fontSize:'12px',
    color:'#5e6c84',
    lineHeight:'10px'
  
  })

export default function ClientHome(){
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(FetchOffre())
    },[dispatch])
    let Offre = useSelector((state)=>state.offres.offres.offers)
    console.log(Offre);
    const menu = [
        {
            id:"offre",
            title:"Nos offres",
            link:"/offres"
        },
        {
            id:"contact",
            title:"Nous contacter",
            link:"/contact"
        }
        ];
    const features = [
    {
        icon: <SpeakerPhoneIcon/>,
        name: "Digital Marketing",
    },
    {
        icon: <ShoppingBagIcon/>,
        name: "E-Commerce",
    },
    {
        icon: <ChipIcon/>,
        name: "Digital Research",
    },
    {
        icon: <ChartIcon/>,
        name: "Digital Analysis",
    },
    {
        icon: <ChartIcon/>,
        name: "Developpeur web",
    },
    {
        icon: <ChartIcon/>,
        name: "Data analiste",
    },
    {
        icon: <ChartIcon/>,
        name: "RH junior",
    },
    {
        icon: <ChartIcon/>,
        name: "Devops",
    },
    {
        icon: <ChartIcon/>,
        name: "Developpeur fullstuck",
    },
    ];

   
   
    const imageLink = "https://mediahttps://www.codeur.com/blog/wp-content/uploads/2018/12/codeur-developpeur-web.jpg.gettyimages.com/id/1176475543/fr/vectoriel/sc%C3%A8ne-de-for%C3%AAt-avec-laurore.jpg?s=612x612&w=gi&k=20&c=kVx724HVFcIP_SuCgZRAOgrxpOUbIouE7YUMJqk50JE=";
    
    return(
        <>
           <div class="overflow-hidden w-full min-h-screen font-sans" style={{background:Color.primary}}>
                <div class="relative">
                    <img class="absolute opacity-70" src="https://raw.githubusercontent.com/tailwindcollections/tailwind-traffic-website/d208364918d92be9afb20d24e236fdb9bfc4fbf9/public/img/bg-1.svg" alt=""></img>
                    <div class="relative py-10 px-8 mx-auto max-w-7xl">
                        <nav class="flex justify-between items-center">
                        <a href="#" class="text-2xl font-semibold text-white">SMART-RECRUTE</a>
                        <ul
                            class="hidden md:items-center md:tracking-wider md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex"
                        >
                            {menu.map((item=>(
                                <Lank 
                                to={item.id}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    <li className="p-4 hover:bg-white hover:rounded-2xl hover:text-gray-900 ease-in duration-300 cursor-pointer" key={item.id}>
                                        {item.title}
                                    </li>
                                </Lank>
                            )))}
                            <Link to="/suivi">
                                    <li className="p-4 hover:bg-white hover:rounded-2xl hover:text-gray-900 ease-in duration-300 cursor-pointer">
                                        Suivre un dossier
                                    </li>
                            </Link>
                        </ul>
                            <UserDropdown/>
                        </nav>
                    </div>
                    <div class="relative py-10 px-8 mx-auto max-w-7xl">
                        <div class="flex flex-col gap-y-12 md:flex-row">
                            <div class="md:w-1/2">
                                <h1
                                class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                                >
                                Postulez ici  et {" "}
                                <span
                                    class="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-5 after:-z-10"
                                >
                                suivez votre {" "}
                                </span>
                                candidature facilement 
                                </h1>
                                <p class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                                Un outil simple et efficace pour mettre en valeur vos compétences.
                                </p>
                                <div class="flex gap-x-6 items-center pt-12">
                                <button
                                    class="py-4 px-6 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300"
                                >
                                    COMMENCER
                                </button>
                                <button
                                    class="flex gap-x-2 items-center py-4 px-6 font-medium tracking-wide text-gray-300 transition hover:text-teal-300"
                                >
                                    <PlayIcon class="w-8 h-8 stroke-current" />
                                    <span>Regardez les etapes</span>
                                </button>
                                </div>
                            </div>
                            <div class="flex items-center md:justify-center md:pl-24 md:w-1/2">
                                <img
                                class="max-w-md lg:max-w-xl drop-shadow-2xl"
                                src="https://raw.githubusercontent.com/hasina821/Avaizo/cc3706662306b569724f77c725e630e888289837/Front/public/undraw_interview_re_e5jn(1).svg"
                                alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div> 
                <h1
                    style={{textAlign:"center",marginTop:"5%"}}
                    class=" z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                                >
                                Nos offres
                </h1>
                <div id="offre" class="relative">
                {Offre&&(
                <Grid container style={{marginTop: "50px"}}>
                    <Grid item xs={2} lg={2} md={2}>

                    </Grid>
                    
                    {Offre.map((offre)=>(
                        <PostModal key={offre.id} nom={offre.nom} urgent={offre.urgent} pdc={offre.pdc} refe={offre.ref}/>
                    ))}
                    
                    <Grid item xs={3} lg={3} md={3}>

                    </Grid>
                </Grid>
                )}
                </div>
                 
                <div id="contact" className="mt-64">
                    <Footer/>
                </div>
            </div>
        </>
    )
}