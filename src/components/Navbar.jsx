import React from 'react'
import { CartIcon } from '../assets/icons'
import { useSelector } from 'react-redux'
function Navbar() {
  const {amount} = useSelector((store)=>store.cart)
  return (
    <nav>
        <div className="navbar-container">
            <h2>Cart</h2>
            <div className="cart-quantity-container">
                <CartIcon/>
                <div className="cart-quatity">
                    <p>{amount}</p>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar