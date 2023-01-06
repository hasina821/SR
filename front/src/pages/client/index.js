import {useState} from "react";
import PlayIcon from "../../components/logo/play";
import SpeakerPhoneIcon from "../../components/logo/speaker";
import ShoppingBagIcon from "../../components/logo/shopping";
import ChipIcon from "../../components/logo/Chip";
import ChartIcon from "../../components/logo/chart";
import { Color } from "../../components/palette/color";
import CardPost from "../../components/cards/stats/cardPost";
import { Link } from "react-router-dom";
import {Link as Lank} from "react-scroll";
import Footer from "../../components/Footer";


export default function ClientHome(){
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
                        <button
                            class="hidden py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800 transition md:inline-block hover:bg-teal-300 hover:text-gray-900 hover:shadow-lg"
                        >
                            COMMENCER
                        </button>
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
                                candudature facilement 
                                </h1>
                                <p class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                                Un outil simple et efficace pour mettre en valeur vos competences.
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
                    
                <div class="relative py-16 px-8 mx-auto max-w-7xl">
                    <div
                    class="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8"
                    >
                    {features.map((feature)=>(
                        <div
                            key={feature.name}
                            class="flex overflow-hidden relative flex-col items-start rounded-lg transition duration-300 cursor-pointer group"
                        >
                            <CardPost menu={feature}  />
                        </div>
                     ))}
                    </div>
                </div>
                </div>
                <div id="contact" className="mt-64">
                    <Footer/>
                </div>
            </div>
        </>
    )
}