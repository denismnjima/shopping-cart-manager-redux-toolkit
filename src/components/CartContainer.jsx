import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ListIcon } from '../assets/icons'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'
export const CartContainer = () => {
  const {amount,total,cartItems} = useSelector((store)=>store.cart)
  const dispatch = useDispatch();
  
  if(amount<1){
    return(
        <div className='empty-cart'>
            <ListIcon/>
            <h2>Empty cart!</h2>
            <p> please add items to cart!</p>
        </div>
    )
  }
  else{
    return(
        <div className='cart-container'>
            <h1>Your bag</h1>

            {/* cartItems */}
            {cartItems.map(item=>{
                return <CartItem key={item.id} {...item} />
            })}


            <div className="totals-container">
                <h3>Total</h3>
                <h2>KES {Math.floor(total)}</h2>
            </div>

            <button
             className="clear-cart" 
             onClick={()=>{dispatch(clearCart())}}
             >Clear cart</button>

        </div>
    )
  }

}
