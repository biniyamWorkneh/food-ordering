import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "./data/data";
const Card = ({ product }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        margin: "0 10px 0 10px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "40rem",
          width: "25rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid silver",
          margin: "90px 0 0 50px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ margin: "0px" }}>
          <img
            src={`/${product.imageSrc}`}
            alt=""
            style={{
              height: "20rem",
              width: "25rem",
              margin: "",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />

          <div style={{ margin: "25px" }}>
            <h3>{product.content}</h3>
            <p> protine: {product.protine}</p>
            <p>fat: {product.fat}</p>
            <p>carbohaydrate: {product.carbohaydrate}</p>
            <p>vitamins: {product.vitamins}</p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              price: birr {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const AllDetails = () => {
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  return (
    <div className="biniyam">
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {currentProducts.map((product) => (
          <Card product={product} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              style={{
                margin: "5px",
                padding: "8px",
                border: currentPage === page ? "2px solid #333" : "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AllDetails;
