import React from 'react';

const ProductItem = (props) => {
   return (
      <div className='col-3 mt-4'>
         <div className='card'>
            <img
               src={props.image}
               className='card-img-top img-fluid'
               alt='...'
            />
            <div className='card-body'>
               <h5 className='card-title'>{props.name}</h5>
               <p className='card-text'>{props.shortDescription}</p>
               <a
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  onClick={() => {
                     props.viewPhone(props.id);
                  }}
               >
                  View Information
               </a>
            </div>
         </div>
      </div>
   );
};

export default ProductItem;
