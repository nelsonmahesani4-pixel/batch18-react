import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={product.image} alt={product.title} style={styles.image} />

      <div style={styles.content}>
        <h2 style={styles.title}>{product.title}</h2>

        <p style={styles.price}>
          Rs {product.price.toLocaleString()}
        </p>

        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#111")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#ff5722")
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "260px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    transition: "0.3s",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
    textAlign: "center",
  },
  title: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "8px",
  },
  price: {
    fontSize: "15px",
    color: "#e91e63",
    fontWeight: "600",
    marginBottom: "12px",
  },
  button: {
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#ff5722",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ProductCard;