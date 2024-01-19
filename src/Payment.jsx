<<<<<<< HEAD
// Front-end code (LoginPage.jsx)

import React, { useState } from "react";
import axios from "axios";

const serverApiEndpoint = "http://localhost:4400/api/pay";
=======
import React, { useState } from "react";
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

<<<<<<< HEAD
  const submitData = async () => {
    console.log("67890");
    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      phone,
    };

    try {
      const response = await axios.post(serverApiEndpoint, userData);
      console.log("Response:", response);
      // Handle success, redirect user or show success message
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error, show a user-friendly message
      alert("Error submitting data. Please try again.");
    }
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
<<<<<<< HEAD
        <form>
=======
        <form onSubmit={handleSubmit}>
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: "95%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: "95%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "95%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "95%", padding: "10px", marginBottom: "10px" }}
          />
<<<<<<< HEAD
        </form>
        <button
          onClick={() => submitData()}
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
=======
          <input
            type="submit"
            value="Login"
            style={{
              width: "80%",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </form>
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
      </div>
    </div>
  );
};

export default LoginPage;
