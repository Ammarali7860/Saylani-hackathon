import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
    
        try {
          setDoc(doc(db, "users", auth.currentUser.uid), {
            fullName,
            contact,
            email,
            password
          }).then(doc => {
            console.log(doc)
            navigate("/login")
          })

        } catch (e) {
          console.error("Error adding document: ", e);
        }
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={event => setFullName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact Number:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={event => setContact(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
