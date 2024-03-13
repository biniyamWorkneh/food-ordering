import React from "react";
import { useParams } from "react-router-dom";
import { productData as products } from "./data/data";

const Details = () => {
  const { id } = useParams(); // Extract the id parameter from the URL

  // Find the product with the matching id
  const product = products.find((product) => product.id.toString() === id.toString());

  // Render the details of the product
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {product ? (
        <div
          style={{
            width: "25%",
            padding: "1px",
            margin:"20px",
            border: "2px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "white",
            height:"750px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)"         }}
        >
          <img
            src={`/${product.imageSrc}`}
            alt=""
            style={{
              width: "100%",
              height: "60%",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          />
          <h2>{product.name}</h2>
          <h3 style={{ marginBottom: "10px",fontWeight:"bold", marginLeft:"20px",fontSize:"22px"
        }}>content</h3>
          <p style={{ marginBottom: "10px", marginLeft:"20px" }}>Protein: {product.protine}</p>
          <p style={{ marginBottom: "10px", marginLeft:"20px" }}> Fat: {product.fat}</p>
          <p style={{ marginBottom: "10px", marginLeft:"20px" }}>Carbohydrate: {product.carbohaydrate}</p>
          <p style={{ marginBottom: "10px" , marginLeft:"20px"}}>Vitamins: {product.vitamins}</p>
          <p style={{ marginBottom: "10px",fontWeight:"bold", marginLeft:"20px",fontSize:"18px"
        }}>Price: {product.price}</p>
          {/* Render other details of the product */}
        </div>
      ) : ( 
        <p>No product found.</p>
      )}
    </div>
  );
};

export default Details;
