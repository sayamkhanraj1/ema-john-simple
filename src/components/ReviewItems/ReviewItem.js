import React from 'react';

const ReviewItem = (props) => {
         const {img, name, price, quantity, key} = props.product;
         const {handleRevome} = props;
         return (
                  <div className="product">
                           <div>
                                    <img src={img} alt="" />
                           </div>
                           <div>
                           <h4 className="product-name">{name}</h4>
                           <h6>Price: $ {price}</h6>
                           <p> Quantity: {quantity}</p>
                           <button  onClick={()=> handleRevome(key)} className="btn-regular">Remove</button>
                           </div>
                  </div>
         );
};

export default ReviewItem;