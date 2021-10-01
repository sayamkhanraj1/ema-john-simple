import React from 'react';
import useProducts from '../../hooks/useProducsts';
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
         const [products]  = useProducts();
         const [cart, setCart] = useCart(products);
         const history = useHistory();
         const handleRevome = key =>{
                  const newCart = cart.filter(product => product.key !== key);
                  setCart(newCart)
                  removeFromDb(key);
         }
         
         const handlePlaceOrder = () =>{
              history.push('/placeorder');
              setCart([]);
              clearTheCart()
         }


         return (
                  <div className="shop-container">
                         <div className="product-contai">
                                  {
                                           cart.map(product => <ReviewItem
                                             key={product.key}
                                             product={product}
                                             handleRevome={handleRevome}
                                             ></ReviewItem>)
                                  }
                           </div> 
                           <div className="cart-container">
                           <Cart cart={cart}>
                                  <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                           </Cart>
                           </div>
                  </div>
         );
};

export default OrderReview;