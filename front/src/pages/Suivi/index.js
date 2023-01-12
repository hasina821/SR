import { useState } from "react";
import Stepper from "../../components/stepper/Stepper";
import StepperControl from "../../components/stepper/StepperControl";
import { UseContextProvider } from "../../context/StepperContext";

import Account from "../../components/etape/Account";
import Details from "../../components/etape/Details";
import Final from "../../components/etape/Final";
import { Color } from "../../components/palette/color";
import SmallNav from "../../components/Navbar/SmallNav";

function Suivi() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Votre identité",
    "Ref dossier",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div class="overflow-hidden w-full min-h-screen font-sans" style={{background:Color.primary}}>
        <SmallNav/>
        <img class="absolute opacity-70" src="https://raw.githubusercontent.com/tailwindcollections/tailwind-traffic-website/d208364918d92be9afb20d24e236fdb9bfc4fbf9/public/img/bg-1.svg" alt=""></img>
        <div className="mx-auto bg-gray-300 rounded-2xl pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="my-10 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
            </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
            <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            />
        )}
        </div>
    </div>
  );
}

export default Suivi;
