import React from 'react'
import './Adopt.css'
const Adopt = () => {
  return (
    <div className='adopt'>
        <div className="adopt-left">
            <h1>Adopt Me</h1>
            {/* <p>Holiday season adopt!</p> */}
            <br />
            <p>Adopting a dog is not just about bringing home a pet; it's about embracing a loyal companion, a confidant, and a source of boundless happiness. These dogs have so much love to give, and all they need is a chance to share it with someone as caring and compassionate as you.</p>
            {/* <button>Discover</button> */}
        </div>
        <div className="adopt-right">
        <img
          src="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png"
          alt=""
          style={{ width: '320px', height: '476px' }}/>
        </div>
    </div>
  )
}

export default Adopt