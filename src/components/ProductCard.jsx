

import React from "react";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>

      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.content}>

        <h2 style={styles.title}>
          {product.name}
        </h2>

        <p style={styles.price}>
          {product.price}
        </p>

        <button
          style={styles.button}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    background: "linear-gradient(145deg, #ffffff, #f7f7f7)",
    transition: "0.3s ease-in-out",
    cursor: "pointer",

    margin: "15px",
    textAlign: "center",

    // ✅ RESPONSIVE SIZE
    width: "100%",
    maxWidth: "280px",
    flex: "1 1 250px",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  content: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "6px",
  },

  price: {
    fontSize: "15px",
    color: "#e91e63",
    fontWeight: "600",
    marginBottom: "12px",
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#ff5722",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
    width: "100%",
  },
};

export default ProductCard;