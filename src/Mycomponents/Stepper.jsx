import React, { useContext, useState } from 'react';
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import { context } from '../context';

function Stepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = useState(1)
  const [loader, setLoader] = useState(false);
  // const [questions, setQuestions] = useState(["hii"]);
  // const [answers, setAnswers] = useState(["hlw"]);
  let { questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, domain, setDomain } = useContext(context)

  const messages = { questions, answers };

  const handleNext = () => {
    // console.log(questions, setQuestions, addQuestions, answers, setAnswers, addAnswers)
    setStep((step) => step + 1)
    setActiveStep((prevStep) => prevStep + 1);
    console.log(domain)
  };

  const handleBack = () => {
    setStep((step) => step - 1)
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle if steps is undefined or not an array
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return <div>No steps provided</div>;
  }

  const handleDownloadPdf = async () => {
    // try {
    //   setLoader(true);
    //   // console.log(messages)
    //   const cookies = Cookies.get("token");
    //   // console.log(cookies)
    //   // Send a request to your backend to generate and download the PDF
    //   console.log(messages.questions)
    //   const response = await fetch(
    //     "http://localhost:8080/api/v1/generatepdf",
    //     {
    //       method: "POST",
    //       // mode: 'no-cors',
    //       headers: {
    //         "Content-Type": "application/json",
    //         // token: cookies,
    //       },
    //       body: JSON.stringify({ messages }),
    //     }
    //   );
    //   // Check if the response is successful
    //   if (!response.ok) {
    //     throw new Error("Failed to generate or download PDF");
    //   } else {
    //     setLoader(false);
    //     // Convert the response body to a blob
    //     const blob = await response.blob();
    //     // Create a URL for the blob
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     // Create an anchor element to facilitate the download
    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.download = "output.pdf";
    //     // Append the anchor element to the document body
    //     document.body.appendChild(a);
    //     // Trigger a click event on the anchor element to initiate the download
    //     a.click();
    //     // Remove the anchor element from the document body after the download is complete
    //     document.body.removeChild(a);
    //   }
    // } catch (error) {
    //   console.error("Error generating or downloading PDF:", error);
    // }
    console.log(domain)
  };

  return (
    <>
      {loader ? (<Loader />) :
        (<div>
          <context.Provider value={{ questions, setQuestions, addQuestions, answers, setAnswers, addAnswers, domain, setDomain }}>
            {steps[activeStep]}
          </context.Provider>
          <div className='d-flex justify-content-center'>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outline-primary" className=' mx-2'>Back</Button>
            {step !== 6 && <Button disabled={activeStep === steps.length - 1} onClick={handleNext} variant="outline-primary" className=' mx-2'>Next</Button>}
            {step === 6 && <Button onClick={handleDownloadPdf} variant="outline-primary" className=' mx-2'>Generate Pdf</Button>}
          </div>
        </div>
        )}
    </>
  );
}

export default Stepper;
