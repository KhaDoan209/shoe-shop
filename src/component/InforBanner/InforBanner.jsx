import React from 'react';

const InforBanner = (props) => {
   const renderInfor = () => {
      let {
         id,
         name,
         alias,
         price,
         description,
         shortDescription,
         quantity,
         image,
      } = props.infor;
      return (
         <>
            <div className='card mb-3'>
               <img
                  src={image}
                  className='card-img-top'
                  alt='...'
               />
               <div className='card-body'>
                  <h5 className='card-title'>{name}</h5>
                  <p className='card-text'>{description}</p>
                  <p className='card-text'>
                     Price: <b>{price.toLocaleString()} $</b>
                  </p>
                  <p className='card-text'>
                     Quantity: <b>{quantity}</b>
                  </p>
               </div>
            </div>
         </>
      );
   };
   return (
      <div>
         <div
            className='modal fade'
            id='exampleModal'
            tabIndex={-1}
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
         >
            <div className='modal-dialog'>
               <div className='modal-content'>
                  <div className='modal-header'>
                     <h5
                        className='modal-title'
                        id='exampleModalLabel'
                     >
                        Information of {props.infor.name}
                     </h5>
                     <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                     />
                  </div>
                  <div className='modal-body'>{renderInfor()}</div>
                  <div className='modal-footer'>
                     <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                     >
                        Close
                     </button>
                     <button
                        type='button'
                        className='btn btn-primary'
                     >
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InforBanner;
