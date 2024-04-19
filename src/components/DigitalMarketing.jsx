import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//import "./question2.css"

function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Digital Marketing</h1>
          <form>
            <div className="card w-100 max-w-lg">
              <div className="card-header">
                <br></br>
                <h4 className="card-title text-center">STEP 1 OF 6</h4>

                <h5 className="card-title">Question 1</h5>
                <p className="card-text">Which one do you like the most?</p>
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
                    The first one
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
                    The second one
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
                    The third one
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
                    The fourth one
                  </label>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br> 
              <br></br>

              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">Which one do you like the most?</p>
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
                      The first one
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
                      The second one
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
                      The third one
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
                      The fourth one
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>

            </div>
          </form>

          <div className="d-flex align-items-center justify-content-center">
            <Link to="/Technology&Innovation">
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

export default DigitalMarketing;
