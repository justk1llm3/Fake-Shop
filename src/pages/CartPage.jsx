import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import NavBar from '../components/Navbar';
const CartPage = () => {
  const { cart ,checkOut,removeFromCart} = useContext(CartContext);

  if (!cart) {
    return <p>Loading...</p>; // This handles cases where the context might be undefined
  }

  if (cart.length === 0) {
    
    return <div>
        <NavBar></NavBar>
        <p>Your cart is empty.</p>;
        </div>
  }

  return (
    <div>
        <NavBar></NavBar>
      <h2>Your Cart</h2>
      <button onClick={checkOut}>Checkout</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.info}>
              <h4>{item.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item)}>remove item</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    marginBottom: '16px',
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '8px',
  },
  image: {
    maxWidth: '25%',
    margin: '10px',
    height: 'auto',
    marginBottom: '16px',
  },
  info: {
    textAlign: 'left',
  }
};

export default CartPage;
