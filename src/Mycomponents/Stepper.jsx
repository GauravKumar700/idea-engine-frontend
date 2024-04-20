import React, { useState } from 'react';
import { Button } from "react-bootstrap";

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
      <div style={{ color: 'white' }}>
        Step {activeStep + 1} of {steps.length}
      </div>
      {steps[activeStep]}
      <div className='d-flex justify-content-center'>
        {/* <button disabled={activeStep === 0} onClick={handleBack}>Back</button> */}
        <Button disabled={activeStep === 0} onClick={handleBack} variant="outline-primary" className=' mx-2'>Back</Button>
        {/* <button disabled={activeStep === steps.length - 1} onClick={handleNext}>Next</button> */}
        <Button disabled={activeStep === steps.length - 1} onClick={handleNext} variant="outline-primary" className=' mx-2'>Next</Button>
      </div>
    </div>
  );
}

export default Stepper;
