import React from 'react'
import './Home.css'
const Home = (props) => {
    console.log(props.data)
  return (
    <>
      <div className="cart-wrapper">
        <h1>Displaying product details</h1>
        <img style={{height:'150px'}} src={require('../images/shirt.jpg')} alt="" />
      </div>
      <div className="text-wrapper item">
        <span>Shirt</span>
        <span>Price:$500.00</span>
      </div>
      <div className="btn-wrapper item">
<button onClick={()=>props.addToCart({price:1000,name:'Apple'})}>Add to Cart</button>
<button style={{backgroundColor:'blue',color:'white'}} onClick={()=>props.removeToCart({})}>Remove from Cart</button>
      </div>
    </>
  )
}

export default Home
