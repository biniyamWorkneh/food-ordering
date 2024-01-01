import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <iframe
          title="Addis Ababa Science and Technology University"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7645583766073!2d38.72958561467504!3d9.01975209581995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163561cd04fbd7c7%3A0x4a7ed75ec8f21a4a!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2sus!4v1643454987645!5m2!1sen!2sus&output=embed"
          allowFullScreen
        ></iframe>
      </div>

      <container></container>
    </div>
  );
};

export default GoogleMap;
