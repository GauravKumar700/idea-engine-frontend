import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function TechnologyInnovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Technology & Innovation</h1>
          <form>
            <div className="card w-100 max-w-lg">
              <div className="card-header">
                <br></br>
                <h4 className="card-title text-center">STEP 1 OF 6</h4>

                <h5 className="card-title">Question 1</h5>
                <p className="card-text">
                  What awesome stuff will your business offer?
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
                    Innovative software solutions
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
                    Advanced hardware devices
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
                    Integrated technology platforms
                  </label>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    How do you figure out what to make and how to make it?
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
                      Partnerships with universities
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
                      Research consortiums
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
                      In-house R&D department
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    How much do you expect to make, and how much will it cost to
                    get started?
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
                      Aggressive growth targets
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
                      Bootstrapping initially
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
                      Seeking venture capital
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What could go wrong with your business, and how will you
                    handle it?
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
                      Technological obsolescence
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
                      Cybersecurity threats
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
                      Economic downturns
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
                    Do you have any special rights to your cool ideas?
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
                      Patent applications
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
                      Trademark registrations
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
                      Strict confidentiality measures
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
                    How will you tell people about your awesome products?
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
                      Digital marketing campaigns
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
                      Salesforce automation
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
                      Personalized customer interactions
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
                    How can customers get your product or service?
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
                      Online store or website
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
                      Physical retail locations
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
                      Mobile app/Phone or email orders
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="q1"
                      id="q1a4"
                      value="3"
                    />
                    <label className="form-check-label" htmlFor="q1a4">
                      Subscription service/Through authorized distributors or
                      resellers
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
                    What's your plan for bringing in cash?
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
                      Product sales
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
                      Subscription services
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
                      Licensing agreements
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
                    How will you tell people about your awesome products?
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
                      Digital marketing campaigns
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
                      Salesforce automation
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
                      Personalized customer interactions
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
                    What goals are you aiming for, and how will you track your
                    progress?
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
                      Adoption rate
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
                      Customer satisfaction
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
                      Revenue growth
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>
{/* 
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Link to="/DigitalMarketing">
              <Button variant="outline-primary">Back</Button>
            </Link>
            <Link to="/Branding&Design">
              <Button variant="primary" type="next">
                Next
              </Button>
            </Link>
          </div> */}
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default TechnologyInnovation;
