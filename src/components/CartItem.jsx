import { ArrowDown,ArrowUp } from "../assets/icons"
import { useDispatch } from "react-redux"
import { removeCartItem,increaseAmount,decreaseAmount} from "../features/cart/cartSlice"
function CartItem({amount,title,price,img,id}) {
    const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
        <div className="cart-item-image-details">
            <div className="image-container">
                <img  src={img}/>

            </div>
            <div className="details-container">
                <h4>{title}</h4>
                <p>KES {price}</p>
                <button onClick={()=>dispatch(removeCartItem(id))}>remove</button>
            </div>
        </div>
        <div className="controls-container">
            <button className="arrow-icon" onClick={()=>dispatch(increaseAmount(id))}>
                <ArrowUp/>
            </button>
            <p className="cartitem-quantity-counter">{amount}</p>
            <button className="arrow-icon" onClick={()=>dispatch(decreaseAmount(id))}>
                <ArrowDown/>
            </button>


        </div>

    </div>
  )
}

export default CartItem