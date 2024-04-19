import React, { useState } from 'react';

function Stepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle if steps is undefined or not an array
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return <div>No steps provided</div>;
  }

  return (
    <div>
      <div style={{color:'white'}}>
        Step {activeStep + 1} of {steps.length}
      </div>
      {steps[activeStep]}
      <button disabled={activeStep === 0} onClick={handleBack}>Back</button>
      <button disabled={activeStep === steps.length - 1} onClick={handleNext}>Next</button>
    </div>
  );
}

export default Stepper;
