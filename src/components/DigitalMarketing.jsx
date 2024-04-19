import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//import "./question2.css"

function DigitalMarketing() {

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
                <p className="card-text">
                  How do you plan to integrate social media marketing (YouTube,
                  Facebook, Instagram) and performance marketing (Ads) into your
                  overall digital marketing business strategy?
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
                    Integrate both equally
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
                    Focus more on social media
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
                    Prioritize performance marketing
                  </label>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">
                    What types of clients are you targeting for your digital
                    marketing services, and how will you tailor your offerings
                    to meet their specific needs across social media platforms
                    and ad campaigns?
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
                      Small businesses
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
                      E-commerce companies
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
                      Enterprises
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">
                    Can you outline the specific services you will offer for
                    social media marketing (YouTube, Facebook, Instagram) and
                    performance marketing (Ads), including campaign creation,
                    optimization, and analytics?
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
                      Comprehensive services for both
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
                      Specialize in one area
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
                      Customized offerings for each client
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">
                    What expertise do you have in leveraging each social media
                    platform (YouTube, Facebook, Instagram) and advertising
                    channels for performance marketing, and how will you
                    capitalize on their unique strengths?
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
                      Extensive expertise in all platforms
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
                      Specialized knowledge in select platforms
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
                      Willingness to learn and adapt
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
                    How do you plan to integrate social media marketing efforts
                    across YouTube, Facebook, and Instagram with performance
                    marketing campaigns to create cohesive and impactful digital
                    marketing strategies for your clients?
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
                      Seamless integration across all platforms
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
                      Separate strategies for each platform
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
                      Flexible approach based on client needs
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
                    What strategies will you employ to effectively target and
                    engage audiences on each social media platform (YouTube,
                    Facebook, Instagram) and through performance marketing ads,
                    ensuring maximum reach and conversion potential?
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
                      Detailed audience segmentation
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
                      Tailored messaging for each platform
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
                      Continuous optimization based on analytics
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
                    How will you allocate budgets between social media marketing
                    efforts and performance marketing ad campaigns, considering
                    factors such as platform costs, ad bidding strategies, and
                    client goals?
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
                      Balanced allocation across both
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
                      Adjust based on campaign performance
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
                      Client-driven budget allocation
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
                    What metrics and analytics will you use to measure the
                    success of your social media marketing efforts on YouTube,
                    Facebook, and Instagram, as well as the performance of your
                    ad campaigns, and how will you report these insights to{" "}
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
                      Comprehensive reporting with KPIs
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
                      Comprehensive reporting with KPIs
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
                      Emphasis on conversion tracking
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
                    How do you plan to develop compelling ad creatives and
                    messaging that resonate with target audiences across social
                    media platforms (YouTube, Facebook, Instagram) and
                    performance marketing campaigns, driving engagement and
                    conversions?
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
                      Creative storytelling approach
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
                      A/B testing for ad variations
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
                      Collaborative process with clients
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
                    Where do you see your digital marketing business in the next
                    5 years in terms of social media marketing and performance
                    marketing, and how will you adapt to evolving trends and
                    technologies in the digital landscape?
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
                      Diversifying services
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
                      Expanding clientele
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
                      Embracing emergin trends
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>

          {/* <div className="d-flex align-items-center justify-content-center">
            <Link to="/Technology&Innovation">
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

export default DigitalMarketing;
