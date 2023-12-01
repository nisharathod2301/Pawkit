import React from 'react'
import './Breadcrums.css'
// import arrow_icon from '../Assets/arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Dog House <span>{'->'}</span> {product.category} <span>{'->'}</span> {product.name}
    </div>
  );
};

export default Breadcrums