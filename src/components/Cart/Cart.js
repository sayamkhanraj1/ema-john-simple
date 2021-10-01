import React from 'react';
import './Cart.css'

const Cart = (props) => {
         const {cart} = props;
         let totalQuantity = 0;
         let total = 0;
         for(const product of cart){
                  if(!product.quantity){
                           product.quantity = 1;
                  }
                  total = total + product.price * product.quantity;
                  totalQuantity = totalQuantity + product.quantity;
         };

         const shipping = total > 0 ? 15: 0 ;
         const tax = (total + shipping) * 0.10;
         const grandTotal = total + shipping + tax;

         return (
                  <div className="cart">
                           <div className="cart-head">
                           <h3 >Order Summary</h3>
                           <h5>Items Orderd: {totalQuantity}</h5>
                           </div>
                           <h6 className="p-style">Total: ${total.toFixed(2)}</h6>
                           <h6 className="p-style">Shipping And Handling: ${shipping}</h6>
                           <h6 className="p-style">Tax: ${tax.toFixed(2)}</h6>
                           <h5 className="total">Order Total: ${grandTotal.toFixed(2)}</h5>
                           {props.children}
                           {/* <button className="cart-btn">Review your order</button> */}
                  </div>
         );
};

export default Cart;