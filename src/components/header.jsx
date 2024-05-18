import React from "react";
import './header.css'
import res from './final.mp4'

const Header = (props) => {

  const toggleHandler = () => {
    props.togg(prev => !prev)
  }

  return (
      <div className="header-container">
        <div className="header-con">  
          <h1 className="h1-Meals">X Restaurant</h1>
          <button className="cart-button" onClick={toggleHandler}> 
            <p className="your-cart">You cart</p> <p className="cart-num">{props.val}</p> 
          </button>
        </div>
        <video src={res} autoPlay loop muted style={{marginTop : '100px'}} ></video>
      </div>
  )
}

export default Header