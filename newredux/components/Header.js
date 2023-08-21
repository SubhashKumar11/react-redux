import React from 'react'
import './Home.css'
const Header = (props) => {
    console.log(props.data)
  return (
    <>
      <div className="add-to-cart">
        <span className="cart-count">
            {props.data.length}
        </span>
        <img src={require('../images/cart.jpg')} alt="" />
        
      </div>
    </>
  )
}

export default Header
