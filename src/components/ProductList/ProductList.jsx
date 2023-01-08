import React, { Component } from 'react';
import ProductItem from '..//ProductItem/ProductItem';

export default class ProductList extends Component {
   renderShoe = () => {
      return this.props.shoes.map((shoe) => {
         return (
            <ProductItem
               key={shoe.id}
               id={shoe.id}
               image={shoe.image}
               name={shoe.name}
               shortDescription={shoe.shortDescription}
               viewPhone={this.props.viewPhone}
            />
         );
      });
   };
   render() {
      return (
         <div>
            <div className='container'>
               <div className='row'>{this.renderShoe()}</div>
            </div>
         </div>
      );
   }
}
