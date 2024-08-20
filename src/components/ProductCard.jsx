import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.info}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '16px',
  },
  info: {
    textAlign: 'left',
  },
  button: {
    marginTop: '16px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductCard;
