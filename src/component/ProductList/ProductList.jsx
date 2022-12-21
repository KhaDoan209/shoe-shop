import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
const ProductList = (props) => {
   
   const renderShoe = () => {
      return props.shoes.map((shoe) => {
         return (
            <ProductItem
               key={shoe.id}
               id={shoe.id}
               image={shoe.image}
               name={shoe.name}
               shortDescription={shoe.shortDescription}
               viewPhone={props.viewPhone}
            />
         );
      });
   };
   return (
      <div>
         <div className='container'>
            <div className='row'>{renderShoe()}</div>
         </div>
      </div>
   );
};

export default ProductList;
