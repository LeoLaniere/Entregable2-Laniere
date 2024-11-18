import imgCart from "../../assets/img-carrito.jpg"
import { useContext } from "react"
import { cartContext } from "../../context/CartCOntext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartTotalQuantity} =useContext(cartContext)
  const total = cartTotalQuantity()
  return (
    <Link to="/cart" className="cartwidget">
      <img src={imgCart} alt="" style={{width: "35px"}} />
      <p className="number-cartWidget">{ total >= 1 && total}</p>
    </Link>
  )
}

export default CartWidget
