import PlayIcon from "../../components/logo/play";
import SpeakerPhoneIcon from "../../components/logo/speaker";
import ShoppingBagIcon from "../../components/logo/shopping";
import ChipIcon from "../../components/logo/Chip";
import ChartIcon from "../../components/logo/chart";
import { Color } from "../../components/palette/color";


export default function ClientHome(){
    const menu = ["Offres", "Mes candudatures", "Suivre un cv", "Doléances", "Parler au RH"];
    const features = [
    {
        icon: <SpeakerPhoneIcon/>,
        title: "Digital Marketing",
    },
    {
        icon: <ShoppingBagIcon/>,
        title: "E-Commerce",
    },
    {
        icon: <ChipIcon/>,
        title: "Digital Research",
    },
    {
        icon: <ChartIcon/>,
        title: "Digital Analysis",
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
                                <li key={item}>
                                    {item}
                                </li>
                            )))}
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
                <div class="relative">
                    <img class="absolute bottom-0 right-0 rotate-180 opacity-70" src="https://raw.githubusercontent.com/tailwindcollections/tailwind-traffic-website/d208364918d92be9afb20d24e236fdb9bfc4fbf9/public/img/bg-1.svg" alt=""></img>
                <div class="relative py-16 px-8 mx-auto max-w-7xl">
                    <div
                    class="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8"
                    >
                    {features.map((feature)=>(
                        <div
                            class="flex overflow-hidden relative flex-col items-start p-6 bg-gray-300 rounded-lg transition duration-300 cursor-pointer group hover:bg-white"
                        >
                            <span
                            key={feature.title}
                            class="absolute top-0 right-0 w-24 h-24 bg-indigo-900 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14"
                            />
                                <div
                                class="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-indigo-9000"
                                >
                                {/* 
                                <Component
                                
                                    class="w-6 h-6 text-white transition duration-300 group-hover:text-gray-800"
                                />
                                */}
                                </div>
                                    <span
                                    class="inline-block pt-6 text-2xl font-medium tracking-wide text-gray-800 transition duration-300 group-hover:text-gray-800"
                                    >
                                    {feature.title}
                                    </span>
                        </div>
                     ))}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}