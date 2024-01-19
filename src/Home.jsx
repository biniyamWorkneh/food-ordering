import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { productData } from "./data/data";
=======
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
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
<<<<<<< HEAD
            backgroundColor: "green",
=======
            backgroundColor: "blueviolet",
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
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
<<<<<<< HEAD
=======
  const products = [
    {
      id: 1,
      imageSrc: "images/b.jpg",
      price: 60.99,
      details: "Product details 1",
    },
    {
      id: 2,
      imageSrc: "images/bb.jpg",
      price: 55.49,
      details: "Product details 2",
    },
    {
      id: 3,
      imageSrc: "images/bbb.jpg",
      price: 70.0,
      details: "Product details 3",
    },
    {
      id: 4,
      imageSrc: "images/p.jpg",
      price: 75,
      details: "product details 4",
    },
    {
      id: 5,
      imageSrc: "images/pp.jpg",
      price: 75,
      details: "product details 5",
    },
    {
      id: 6,
      imageSrc: "images/s.jpg",
      price: 60.99,
      details: "Product details 6",
    },
    {
      id: 7,
      imageSrc: "images/ss.jpg",
      price: 60.99,
      details: "Product details 7",
    },
    {
      id: 8,
      imageSrc: "images/sss.jpg",
      price: 60.99,
      details: "Product details 8",
    },
    {
      id: 9,
      imageSrc: "images/coffee.jpg",
      price: 20,
      details: "product detail 9",
    },
  ];

>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
<<<<<<< HEAD
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);
=======
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

<<<<<<< HEAD
  const totalPages = Math.ceil(productData.length / itemsPerPage);
=======
  const totalPages = Math.ceil(products.length / itemsPerPage);
>>>>>>> 50ab23b0252c2bbc96c47519f7650b856559725a

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
