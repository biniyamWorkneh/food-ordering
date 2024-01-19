import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#2c3e50",
        padding: "20px",
        textAlign: "center",
        color: "#ecf0f1",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ flex: 1, margin: "10px" }}>
          <h3>Contact Us</h3>
          <p>Phone: 0900 911 414</p>
          <p style={{ marginLeft: "100px" }}>
            Email:{" "}
            <a
              href="mailto:biniyamworkneh@gmail.com"
              style={{
                color: "#3498db",
                textDecoration: "none",
              }}
            >
              biniyamworkneh@gmail.com
            </a>
          </p>
          <p>
            telegram:{" "}
            <a
              href="http://t.me/BWin_21"
              target="_blank"
              style={{ color: " #3498db" }}
            >
              BWin_21
            </a>
          </p>
        </div>
        <div style={{ flex: 1, margin: "10px" }}>
          <h3>Company Info</h3>
          <p> company: etsub food.</p>
          <p></p>
          <p style={{}}>Location: bole kifle ketema</p>
          <p> Infront of bole medanealem</p>
        </div>
      </div>
      <p style={{ marginTop: "20px" }}>
        &copy;{new Date().getFullYear()} Food Order Place.
      </p>
    </div>
  );
};

export default Footer;
