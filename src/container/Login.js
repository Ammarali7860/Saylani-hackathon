import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"


import "./Login.css";

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/home')
    console.log('user',user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error', errorCode, errorMessage)
  });

    //Prevent page reload
    // event.preventDefault();

    // var { uname, pass } = document.forms[0];

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required value={email}
          onChange={event => setEmail(event.target.value)} />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required value={password}
          onChange={event => setPassword(event.target.value)} />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="button-container">
            <NavLink to="/signup">
              <button>Sign In</button>
            </NavLink>
          </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
      {renderForm}
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
      </div>
    </div>
  )
}
export default Login;

