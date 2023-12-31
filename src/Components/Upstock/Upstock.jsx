import React from 'react'
import './Upstock.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Upstock = () => {
  return (
    <div className='upstock'>
      <br />
        <h1>Up stock</h1>
        <br />
        <p>Fun fact: Your home will transform into a haven of warmth and joy with a furry friend by your side.</p>
        <hr />
        <div className="upstock-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Upstock