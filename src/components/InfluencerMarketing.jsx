import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../context";

function InfluencerMarketing() {

  const quest = {
    "1": "What is the primary objective of your influencer marketing business, and what services will you offer to achieve this objective?",
    "2": "Who is your target market for influencer marketing services, and how will you tailor your offerings to meet their specific needs?",
    "3": "How do you plan to differentiate your influencer marketing business from competitors in the industry?",
    "4": "What specific influencer marketing services will your business provide to clients, and how will you deliver value to them?",
    "5": "How do you plan to attract clients to your influencer marketing services, and what strategies will you use to generate leads?",
    "6": "What is your process for managing influencer marketing campaigns, from strategy development to execution and measurement?",
    "7": "How will you identify and select the right influencers for your clients' campaigns, considering factors such as audience demographics and brand alignment?",
    "8": "How will you determine pricing for your influencer marketing services, and what factors will you consider when budgeting for client campaigns?",
    "9": "What technology platforms and tools will you utilize to streamline influencer discovery, campaign management, and performance tracking?",
    "10": "What is your vision for the future of your influencer marketing business, and how will you adapt to changes in the industry landscape to ensure long-term success?"
  }

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    domain['influencer'] = {}
  }, []);

  let { domain, setDomain } = useContext(context)
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const addQuestion = (question, answer) => {
    const updateInfluencer = {
      ...domain['influencer'],
      [question]: answer
    };
    setDomain({
      ...domain,
      influencer: updateInfluencer
    });
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
    addQuestion(quest[questionId], answer)
  };

  return (
    <div ref={ref} className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Influencer Marketing</h1>
          <form className="card w-100 max-w-lg">
            <h4 className="card-title text-center mt-4">STEP 3 OF 6</h4>
            <div>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <br></br>
                  <h5 className="card-title">Question 1</h5>
                  <p className="card-text">
                    What is the primary objective of your influencer marketing
                    business, and what services will you offer to achieve this
                    objective?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="Objective defined, services planned"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is the primary objective of your influencer marketing business, and what services will you offer to achieve this objective?'] === " Objective defined, services planned"}
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Objective defined, services planned
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="Objective defined, services still planning"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is the primary objective of your influencer marketing business, and what services will you offer to achieve this objective?'] === " Objective defined, services still planning"}
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Objective defined, services still planning
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="Objective and services not defined yet"
                      onChange={(e) => handleAnswerChange("1", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is the primary objective of your influencer marketing business, and what services will you offer to achieve this objective?'] === " Objective and services not defined yet"}
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Objective and services not defined yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    Who is your target market for influencer marketing services,
                    and how will you tailor your offerings to meet their
                    specific needs?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a1"
                      value="Target market identified, offerings tailored"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' Who is your target market for influencer marketing services, and how will you tailor your offerings to meet their specific needs?'] === " Target market identified, offerings tailored"}
                    />
                    <label className="form-check-label" htmlFor="q2a1">
                      Target market identified, offerings tailored
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a2"
                      value="Target market identified, offerings in progress"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' Who is your target market for influencer marketing services, and how will you tailor your offerings to meet their specific needs?'] === " Target market identified, offerings in progress"}
                    />
                    <label className="form-check-label" htmlFor="q2a2">
                      Target market identified, offerings in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q2"
                      id="q2a3"
                      value="Target market and offerings not determined yet"
                      onChange={(e) => handleAnswerChange("2", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' Who is your target market for influencer marketing services, and how will you tailor your offerings to meet their specific needs?'] === " Target market and offerings not determined yet"}
                    />
                    <label className="form-check-label" htmlFor="q2a3">
                      Target market and offerings not determined yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    How do you plan to differentiate your influencer marketing
                    business from competitors in the industry?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a1"
                      value="Clear differentiation strategy"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to differentiate your influencer marketing business from competitors in the industry?'] === " Clear differentiation strategy"}
                    />
                    <label className="form-check-label" htmlFor="q3a1">
                      Clear differentiation strategy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a2"
                      value="Differentiation strategy under development"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to differentiate your influencer marketing business from competitors in the industry?'] === " Differentiation strategy under development"}
                    />
                    <label className="form-check-label" htmlFor="q3a2">
                      Differentiation strategy under development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q3"
                      id="q3a3"
                      value="No differentiation strategy yet"
                      onChange={(e) => handleAnswerChange("3", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to differentiate your influencer marketing business from competitors in the industry?'] === " No differentiation strategy yet"}
                    />
                    <label className="form-check-label" htmlFor="q3a3">
                      No differentiation strategy yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What specific influencer marketing services will your
                    business provide to clients, and how will you deliver value
                    to them?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a1"
                      value="Defined services and value proposition c. Services and
                      value proposition not determined yet"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What specific influencer marketing services will your business provide to clients, and how will you deliver value to them?'] === " Defined services and value proposition c. Services and value proposition not determined yet"}
                    />
                    <label className="form-check-label" htmlFor="q4a1">
                      Defined services and value proposition c. Services and
                      value proposition not determined yet
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a2"
                      value="Services and value proposition in development"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What specific influencer marketing services will your business provide to clients, and how will you deliver value to them?'] === " Services and value proposition in development"}
                    />
                    <label className="form-check-label" htmlFor="q4a2">
                      Services and value proposition in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q4"
                      id="q4a3"
                      value="Services and value proposition not determined yet"
                      onChange={(e) => handleAnswerChange("4", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What specific influencer marketing services will your business provide to clients, and how will you deliver value to them?'] === " Services and value proposition not determined yet"}
                    />
                    <label className="form-check-label" htmlFor="q4a3">
                      Services and value proposition not determined yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">
                    How do you plan to attract clients to your influencer
                    marketing services, and what strategies will you use to
                    generate leads?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a1"
                      value="Client acquisition strategy established"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to attract clients to your influencer marketing services, and what strategies will you use to generate leads?'] === " Client acquisition strategy established"}
                    />
                    <label className="form-check-label" htmlFor="q5a1">
                      Client acquisition strategy established
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a2"
                      value="Client acquisition strategy in progress"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to attract clients to your influencer marketing services, and what strategies will you use to generate leads?'] === " Client acquisition strategy in progress"}
                    />
                    <label className="form-check-label" htmlFor="q5a2">
                      Client acquisition strategy in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q5"
                      id="q5a3"
                      value="No client acquisition strategy yet"
                      onChange={(e) => handleAnswerChange("5", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How do you plan to attract clients to your influencer marketing services, and what strategies will you use to generate leads?'] === " No client acquisition strategy yet"}
                    />
                    <label className="form-check-label" htmlFor="q5a3">
                      No client acquisition strategy yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">
                    What is your process for managing influencer marketing
                    campaigns, from strategy development to execution and
                    measurement?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a1"
                      value="Defined campaign management process"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your process for managing influencer marketing campaigns, from strategy development to execution and measurement?'] === " Defined campaign management process"}
                    />
                    <label className="form-check-label" htmlFor="q6a1">
                      Defined campaign management process
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q6"
                      id="q6a2"
                      value="Campaign management process in development"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your process for managing influencer marketing campaigns, from strategy development to execution and measurement?'] === " Campaign management process in development"}
                    />
                    <label className="form-check-label" htmlFor="q6a2">
                      Campaign management process in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q1"
                      id="q6a3"
                      value="No campaign management process yet"
                      onChange={(e) => handleAnswerChange("6", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your process for managing influencer marketing campaigns, from strategy development to execution and measurement?'] === " No campaign management process yet"}
                    />
                    <label className="form-check-label" htmlFor="q6a3">
                      No campaign management process yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">
                    How will you identify and select the right influencers for
                    your clients' campaigns, considering factors such as
                    audience demographics and brand alignment?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a1"
                      value="Influencer selection criteria defined"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you identify and select the right influencers for your clients campaigns, considering factors such as audience demographics and brand alignment?'] === " Influencer selection criteria defined"}
                    />
                    <label className="form-check-label" htmlFor="q7a1">
                      Influencer selection criteria defined
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a2"
                      value="Influencer selection criteria being develope"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you identify and select the right influencers for your clients campaigns, considering factors such as audience demographics and brand alignment?'] === " Influencer selection criteria being develope"}
                    />
                    <label className="form-check-label" htmlFor="q7a2">
                      Influencer selection criteria being develope
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q7"
                      id="q7a3"
                      value="No influencer selection criteria yet"
                      onChange={(e) => handleAnswerChange("7", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you identify and select the right influencers for your clients campaigns, considering factors such as audience demographics and brand alignment?'] === " No influencer selection criteria yet"}
                    />
                    <label className="form-check-label" htmlFor="q7a3">
                      No influencer selection criteria yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">
                    How will you determine pricing for your influencer marketing
                    services, and what factors will you consider when budgeting
                    for client campaigns?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a1"
                      value="Pricing strategy established"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you determine pricing for your influencer marketing services, and what factors will you consider when budgeting for client campaigns?'] === " Pricing strategy established"}
                    />
                    <label className="form-check-label" htmlFor="q8a1">
                      Pricing strategy established
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a2"
                      value="Pricing strategy in progress"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you determine pricing for your influencer marketing services, and what factors will you consider when budgeting for client campaigns?'] === " Pricing strategy in progress"}
                    />
                    <label className="form-check-label" htmlFor="q8a2">
                      Pricing strategy in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q8"
                      id="q8a3"
                      value="No pricing strategy yet"
                      onChange={(e) => handleAnswerChange("8", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' How will you determine pricing for your influencer marketing services, and what factors will you consider when budgeting for client campaigns?'] === " No pricing strategy yet"}
                    />
                    <label className="form-check-label" htmlFor="q8a3">
                      No pricing strategy yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">
                    What technology platforms and tools will you utilize to
                    streamline influencer discovery, campaign management, and
                    performance tracking?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a1"
                      value="Technology and tools selected"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What technology platforms and tools will you utilize to streamline influencer discovery, campaign management, and performance tracking?'] === " Technology and tools selected"}
                    />
                    <label className="form-check-label" htmlFor="q9a1">
                      Technology and tools selected
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a2"
                      value="Technology and tools being evaluated"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What technology platforms and tools will you utilize to streamline influencer discovery, campaign management, and performance tracking?'] === " Technology and tools being evaluated"}
                    />
                    <label className="form-check-label" htmlFor="q9a2">
                      Technology and tools being evaluated
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q9"
                      id="q9a3"
                      value="No technology and tools selected yet"
                      onChange={(e) => handleAnswerChange("9", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What technology platforms and tools will you utilize to streamline influencer discovery, campaign management, and performance tracking?'] === " No technology and tools selected yet"}
                    />
                    <label className="form-check-label" htmlFor="q9a3">
                      No technology and tools selected yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">
                    What is your vision for the future of your influencer
                    marketing business, and how will you adapt to changes in the
                    industry landscape to ensure long-term success?
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a1"
                      value="Long-term strategy defined"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your vision for the future of your influencer marketing business, and how will you adapt to changes in the industry landscape to ensure long-term success?'] === " Long-term strategy defined"}
                    />
                    <label className="form-check-label" htmlFor="q10a1">
                      Long-term strategy defined
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a2"
                      value="Long-term strategy in development"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your vision for the future of your influencer marketing business, and how will you adapt to changes in the industry landscape to ensure long-term success?'] === " Long-term strategy in development"}
                    />
                    <label className="form-check-label" htmlFor="q10a2">
                      Long-term strategy in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border-2 border-dark"
                      type="radio"
                      name="q10"
                      id="q10a3"
                      value="No long-term strategy yet"
                      onChange={(e) => handleAnswerChange("10", e.target.value)}
                      checked={domain['influencer'] && domain['influencer'][' What is your vision for the future of your influencer marketing business, and how will you adapt to changes in the industry landscape to ensure long-term success?'] === " No long-term strategy yet"}
                    />
                    <label className="form-check-label" htmlFor="q10a3">
                      No long-term strategy yet
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default InfluencerMarketing;
