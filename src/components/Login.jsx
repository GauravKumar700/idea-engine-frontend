import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react';
import "./Login.css"
import Cookies from "js-cookie";
import Loader from "./Loader";

const DivlayoutAuthPage = () => {
  const [login, setLogin] = useState(false)
  let navigate = useNavigate()
  function validate() {
    const mail = document.getElementById("email").value;
    const regExp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    regExp.test(mail) ? alert("You have entered a valid email") : alert("You have entered wrong email");
  }

  //Connection Login Page to backend

  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    setLogin(true)
    e.preventDefault();
    const res = await fetch('https://idea-engine-backend.vercel.app/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.status === 400 || res.status === 401 || !data) {
      setLogin(false)
      window.alert("Invalid Credientials");
      // console.log("Invalid");
    }
    else {
      // dispatch({type: "USER", payload: true});
      setLogin(false)
      window.alert("Login Successfull");
      // const time = new Date(data.options.expires).toUTCString()
      // const expirationDate = new Date();
      // expirationDate.setDate(expirationDate.getDate() + 5);

      Cookies.set("token", data.token, {
        expires: 5,
        path: '/welcome-page',
        httpOnly: true
      })

      Cookies.set('token', data.token, {
        expires: 5,
        path: '/qna-page'
      })

      document.cookie = `token=${data.token}; expires=${new Date(data.options.expires).toUTCString()}; path='/welcome-page'`
      document.cookie = `token=${data.token}; expires=${new Date(data.options.expires).toUTCString()}; path='/qna-page'`
      navigate('/welcome-page')
    }
  }

  const googleAuth = async (e) => {
    setLogin(true)
    e.preventDefault();
    try {
      const res = await fetch('https://idea-engine-backend.vercel.app/auth/google', {
        method: "GET",
        mode: "no-cors"
      });

      if (!res.ok) {
        setLogin(false)
        throw new Error('Failed to authenticate with Google');
      }

      const data = await res.json();
      if (!data.token) {
        setLogin(false)
        throw new Error('Token not found in response');
      }

      // localStorage.setItem('token', data.token);
      navigate('/welcome-page')
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('Failed to authenticate with Google');
    }
  }

  return (
    <>
      {login ? (<Loader />) : (
        <div>
          <div className="divlayout-auth-mypage mx-auto">
            <div className="svg">
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div >
            <div className="divpage-fg">
              <div className="section">
                <div className="heading-1">
                  <div className="welcome-to-dayzero-login">Welcome To IdeaEngine!</div>
                </div>
                <div className="ppage-tagmargin">
                  <div className="blueprint-to-brilliance">
                    BLUEPRINT TO BRILLIANCE
                  </div>
                </div>
                <div className="heading-2margin">
                  <div className="heading-2">
                    <div className="a-blueprint-engine-container">
                      <span className="a-blueprint-engine">{`A blueprint engine that converts your ideas into execution focused plan of action within `}</span>
                      <b>6 minutes</b>
                      <span className="a-blueprint-engine">.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '100%', height: '' }}>
                <div className="section1">
                  <div className="pform-title">
                    <div className="welcome-back">Welcome Back</div>
                  </div>
                  <div className="pform-subtitle">
                    <div className="fill-your-details">
                      Fill your details to get started
                    </div>
                  </div>
                  <div className="divor-box">
                    <button className="button1">
                      <img className="svg-icon" alt="" src="/svg.svg" />
                      <div className="span1">
                        <div className="continue-with-google" onClick={googleAuth}>Continue With Google</div>
                      </div>
                    </button>
                    <div className="divline">
                      <div className="span2">
                        <div className="or">OR</div>
                      </div>
                    </div>
                  </div>
                  <div className="form">
                    <input className="input"
                      type="email"
                      name='email' id='email' autoComplete='off'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email" >
                    </input>

                    <input className="input"
                      type="password" name='password' id='password' autoComplete='off'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Unique Password">
                    </input>

                    <button className="button2" type='submit' name='signin' id='signin' value='Log In' onClick={loginUser}>
                      <div className="create-an-account">Let's Login</div>
                    </button>
                    <div className="pswitch-link">
                      <div className="do-you-already-container">
                        <span>{`Don't have an account? `}</span>
                        <Link to="/signUp"><span className="login">Register</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      )}
    </>
  );
};

export default DivlayoutAuthPage;
