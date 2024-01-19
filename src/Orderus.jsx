import React, { useState } from "react";
import ServiceCard from "./ServiceCards";
<<<<<<< HEAD
import { services } from "./data2/data2";

const Service = () => {
=======

import imageOne from "../public/images/bb.jpg";
import imageTwo from "../public/images/coffee.jpg";
import imageThree from "../public/images/pp.jpg";
import imageFour from "../public/images/b.jpg";
import imageFive from "../public/images/bbb.jpg";
import imageSix from "../public/images/p.jpg";
import imageSeven from "../public/images/s.jpg";
import imageEight from "../public/images/ss.jpg";
import imageNine from "../public/images/sss.jpg";

const Service = () => {
  const services = [
    { id: 1, imageSrc: imageOne, price: 50.0 },
    { id: 2, imageSrc: imageTwo, price: 75.0 },
    { id: 3, imageSrc: imageThree, price: 100.0 },
    { id: 4, imageSrc: imageFour, price: 70.0 },
    { id: 5, imageSrc: imageFive, price: 90.0 },
    { id: 6, imageSrc: imageSix, price: 110.0 },
    { id: 7, imageSrc: imageSeven, price: 80.0 },
    { id: 8, imageSrc: imageEight, price: 120.0 },
    { id: 9, imageSrc: imageNine, price: 115.0 },
  ];

>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = services.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {visibleItems.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            imageSrc={service.imageSrc}
            price={service.price}
            onSelect={() => console.log("Service selected:", service)}
            onAmountChange={(amount) => console.log("Amount changed:", amount)}
          />
        ))}
      </div>
      <div
        className="pagination-container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          className="pagination"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
