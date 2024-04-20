import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function InfluencerMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Influencer Marketing</h1>
          <form>
            <div className="card w-100 max-w-lg">
              <div className="card-header">
                <br></br>
                <h4 className="card-title text-center">STEP 5 OF 6</h4>

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
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1a1"
                    value="0"
                  />
                  <label className="form-check-label" htmlFor="q1a1">
                    Objective defined, services planned
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1a2"
                    value="1"
                  />
                  <label className="form-check-label" htmlFor="q1a2">
                    Objective defined, services still planning
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1a3"
                    value="2"
                  />
                  <label className="form-check-label" htmlFor="q1a3">
                    Objective and services not defined yet
                  </label>
                </div>
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="q1"
                    id="q1a4"
                    value="3"
                  />
                  <label className="form-check-label" htmlFor="q1a4">
                    The fourth one
                  </label>
                </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Target market identified, offerings tailored
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Target market identified, offerings in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Target market and offerings not determined yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Clear differentiation strategy
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Differentiation strategy under development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No differentiation strategy yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Defined services and value proposition c. Services and
                      value proposition not determined yet
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Services and value proposition in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      Services and value proposition not determined yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Client acquisition strategy established
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Client acquisition strategy in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No client acquisition strategy yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Defined campaign management process
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Campaign management process in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No campaign management process yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Influencer selection criteria defined
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Influencer selection criteria being develope
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No influencer selection criteria yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Pricing strategy established
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Pricing strategy in progress
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No pricing strategy yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Technology and tools selected
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Technology and tools being evaluated
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No technology and tools selected yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
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
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a1"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="q1a1">
                      Long-term strategy defined
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a2"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="q1a2">
                      Long-term strategy in development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a3"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="q1a3">
                      No long-term strategy yet
                    </label>
                  </div>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      The fourth one
                    </label>
                  </div> */}
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <Link to="/PublicRelations">
              <Button variant="outline-primary">Back</Button>
            </Link>
            <Link to="/ContentProduction">
              <Button variant="primary" type="next">
                Next
              </Button>
            </Link>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default InfluencerMarketing;
