import React, { useState } from "react";
import ServiceCard from "./ServiceCards";
import { services } from "./data2/data2";

const Service = () => {
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
