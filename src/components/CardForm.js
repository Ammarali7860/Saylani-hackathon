import React, { useState } from "react";
import "./CardForm.css"

const CardForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${address}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <label >
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          
        />
      </label>
      <label >
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          
        />
      </label>
      <label >
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          
        />
      </label>
      <label >
        Shipping Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          
        />
      </label>
      <button type="submit" >
        Place Order
      </button>
    </form>
  );
};

export default CardForm;
