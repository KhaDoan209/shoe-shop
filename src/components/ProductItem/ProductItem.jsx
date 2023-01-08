import React, { Component } from 'react';

export default class ProductItem extends Component {
   render() {
      return (
         <div className='col-3 mt-4'>
            <div className='card'>
               <img
                  src={this.props.image}
                  className='card-img-top img-fluid'
                  alt='...'
               />
               <div className='card-body'>
                  <h5 className='card-title'>{this.props.name}</h5>
                  <p className='card-text'>{this.props.shortDescription}</p>
                  <a
                     className='btn btn-primary'
                     data-bs-toggle='modal'
                     data-bs-target='#exampleModal'
                     onClick={() => {
                        this.props.viewPhone(this.props.id);
                     }}
                  >
                     View Information
                  </a>
               </div>
            </div>
         </div>
      );
   }
}
