import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function PublicRelations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="title text-center mb-3">Public Relations</h1>
          <form>
            <div className="card w-100 max-w-lg">
              <div className="card-header">
                <br></br>
                <h4 className="card-title text-center">STEP 4 OF 6</h4>

                <h5 className="card-title">Question 1</h5>
                <p className="card-text">What are the big trends in PR we can take advantage of?</p>
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
                    Influencer marketing
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
                    Crisis management
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
                    Data-driven PR strategies
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
                    Community engagement initiatives
                  </label>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 2</h5>
                  <p className="card-text">Who else is in the PR game, and how are we going to be different?</p>
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
                      Boutique PR agencies focusing on niche industries
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
                      Large PR firms catering to corporate clients
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
                      Freelance PR consultants offering personalized services
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
                      In-house PR teams within companies handling their own communications
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 3</h5>
                  <p className="card-text">What exactly are we doing for our clients, and why does it matter?</p>
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
                      Media relations and press release distribution
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
                      Reputation management and brand positioning
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
                      Event planning and execution
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
                      Crisis communication and issue management
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 4</h5>
                  <p className="card-text">Are we going to focus on anything specific, and why?</p>
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
                      Specialize in tech industry PR due to our team's expertise
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
                      Target hospitality sector for its growing need for PR services
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
                      Offer crisis management as a core service due to rising demand
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
                      Concentrate on local businesses to establish strong community ties
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 5</h5>
                  <p className="card-text">Who are we trying to help, and what do they need?</p>
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
                      Startups seeking to build brand awareness
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
                      Established companies aiming to repair damaged reputations
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
                      Non-profit organizations requiring public support for their causes
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
                      Celebrities and influencers needing PR representation
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 6</h5>
                  <p className="card-text">How do we make sure they stick with us?</p>
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
                      Provide personalized PR strategies tailored to their goals
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
                      Offer ongoing monitoring and analysis of media coverage
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
                      Deliver timely and transparent communication
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
                      Regularly review and adjust PR tactics based on client feedback
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 7</h5>
                  <p className="card-text">How are we getting the word out about our PR agency?</p>
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
                      Social media marketing campaigns highlighting successful case studies
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
                      Networking events and industry conferences to showcase our expertise
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
                      Collaborating with media outlets to secure featured articles and interviews
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
                      Partnering with complementary service providers for cross-promotion opportunities
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 8</h5>
                  <p className="card-text">What do we do to turn interested people into clients</p>
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
                      Offer free PR consultations to assess their needs
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
                      Provide customizable PR packages with transparent pricing
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
                      Showcase our team's experience and track record in the industry
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
                      Offer a satisfaction guarantee or trial period for new clients
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 9</h5>
                  <p className="card-text">What might go wrong, and how do we fix it?</p>
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
                      Miscommunication leading to client dissatisfaction
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
                      Negative media coverage affecting client reputations
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
                      Lack of resources to handle sudden spikes in PR crises
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
                      Competition from larger PR firms undercutting our pricing
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>

              <div className="card w-100 max-w-lg">
                <div className="card-header">
                  <h5 className="card-title">Question 10</h5>
                  <p className="card-text">What are the anticipated risks, and what are our mitigation plans?</p>
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
                      Establishing clear communication channels with clients to address concerns promptly
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
                      Building strong relationships with journalists and media contacts to manage negative publicity
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
                      Developing a crisis management protocol and training team members to handle PR emergencies
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
                      Diversifying our client portfolio and revenue streams to mitigate the impact of losing a major client
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </form>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <Link to="/Branding&Design">
              <Button variant="outline-primary">Back</Button>
            </Link>
            <Link to="/InfluencerMarketing">
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

export default PublicRelations;
