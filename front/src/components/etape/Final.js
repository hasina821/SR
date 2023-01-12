import { useState } from "react";
import { Color } from "../palette/color";
import { useStepperContext } from "../../context/StepperContext";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { FetchCandidature } from "../../toolkit/offres";

export default function Final() {
    const { userData, setUserData } = useStepperContext();
    const dispatch = useDispatch();
    const candidatures = useSelector((state)=>state.offres.candidature.candidatures)
    const [cand,setCand]=useState(null)
    useEffect(()=>{
        dispatch(FetchCandidature())
        candidatures.forEach(element =>{
          if(element.nom=userData.nom){
            console.log("hey");
          }
        });
    },[dispatch])
    console.log(cand);
    return (
      <div className="container md:mt-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="mt-3 text-xl font-semibold uppercase">
           L'etat de votre dossier actuelement : <span
                    className={
                      "text-white p-3 text-center inline-flex items-center justify-center bg-yellow-500 shadow-lg "
                    }
                    style={{borderRadius:'10px 10px'}} >
                    <i>En cours</i>
                  </span>
          </div>
          
          <a className="mt-10" href="/clientHome">
            <button style={{background:Color.primary}} className="h-10 px-5 text-white transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
              Fermer
            </button>
          </a>
        </div>
      </div>
    );
  }
  