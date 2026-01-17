import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalcartAmount } = useContext(StoreContext);

  const DELIVERY_FEE = 40; // Delivery fee in INR

  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>

        {/* Header row */}
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart items */}
        {food_list.map((item) => {
  if (cartItems[item._id] > 0) {
    return (
      <div key={item._id}>
        <div className='cart-item'>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p> {/* Price in USD */}
          <p>{cartItems[item._id]}</p>
          <p>${(item.price * cartItems[item._id]).toFixed(2)}</p> {/* Total in USD */}
          <p className="remove-btn" onClick={() => removeFromCart(item._id)}>x</p>
        </div>
        <hr />
      </div>
    );
  }
  return null;
})}

        
      </div>

      {/* Cart bottom */}
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalcartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalcartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${(getTotalcartAmount()===0?0:getTotalcartAmount() + 2).toFixed(2)}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo code */}
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
