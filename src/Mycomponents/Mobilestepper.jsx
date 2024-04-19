import React, { useState } from 'react';
import Stepper from './Stepper';


function Mobilestepper() {

    const steps = [
        <p style={{color:'white'}}>Step 1 content</p>,
  <p style={{color:'white'}}>Step 2 content</p>,
   <p style={{color:'white'}}>Step 3 content</p>,
      ];
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

  return (
    <div>
     
      <Stepper steps={steps} />
    </div>
    // <div>
    //   <div>
    //     Step {activeStep + 1} of {steps.length}
    //   </div>
    //   <Stepper />
    //   <button disabled={activeStep === 0} onClick={handleBack}>Back</button>
    //   <button disabled={activeStep === steps.length - 1} onClick={handleNext}>Next</button>
    // </div>
  );
}

export default Mobilestepper;