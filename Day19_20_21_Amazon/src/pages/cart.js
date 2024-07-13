import React, { useContext } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CategoryBar from "../components/categoryBar";
import AppContext from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, setSearchText } = useContext(AppContext);

  const navigate = useNavigate();
  const openSearchPage = () => {
    navigate("/search");
  };

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

  const handlePayment = ()=>{
    alert("Payment method coming soon...")
  }

  return (
    <>
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
      <CategoryBar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.count}</p>
                    <p>Total: ${item.price * item.count}</p>
                    <button className="btn btn-success">Buy</button>
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
              <button className="btn btn-primary" onClick={handlePayment}>Proceed to Payment</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
