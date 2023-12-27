// Service.jsx
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCards.jsx";
import imageone from "../public/images/bb.jpg";
import imageTwo from "../public/images/coffee.jpg";
import imageThree from "../public/images/pp.jpg";

const Service = () => {
  const services = [
    { id: 1, imageSrc: imageone, price: 50.0 },
    { id: 2, imageSrc: imageTwo, price: 75.0 },
    { id: 3, imageSrc: imageThree, price: 100.0 },
    // Add more services as needed
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [orderAmount, setOrderAmount] = useState();
  const navigate = useNavigate();

  const handleOrder = () => {
    if (selectedService) {
      // Redirect to payment page with service ID and order amount
      navigate(`/payment/${selectedService.id}?amount=${orderAmount}`);
    } else {
      // Display an error or alert, no service selected
      console.error("no service selected");
    }
  };

  return (
    <div className="content">
      <button onClick={handleOrder} style={{ margin: "10px", height: "100px" }}>
        Order
      </button>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            imageSrc={service.imageSrc}
            price={service.price}
            onSelect={() => setSelectedService(service)}
            onAmountChange={(amount) => setOrderAmount(amount)}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
