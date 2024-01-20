import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "./data/data";
const Card = ({ imageSrc, price, details, id }) => (
  <div className="content">
    <div
      className="row"
      style={{
        width: "350px",
        margin: "35px",
        border: "4px solid #ccc",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <img
        src={imageSrc}
        alt="Product"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>Price: birr {price}</h3>
        <p>{details}</p>
        <button
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "green",
          }}
        >
          <Link
            to={{
              pathname: `/details/${id}`,
              state: { price, imageSrc }, // Pass data in the state
            }}
            style={{ color: "white" }}
          >
            See in Detail
          </Link>
        </button>
      </div>
    </div>
  </div>
);
const ProductList = () => {
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
          <Card
            key={product.id}
            imageSrc={product.imageSrc}
            price={product.price}
            details={product.details}
            id={product.id}
          />
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

export default ProductList;
