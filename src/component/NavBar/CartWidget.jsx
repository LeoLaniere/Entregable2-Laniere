import imgCart from "../../assets/img-carrito.jpg"
import { useContext } from "react"
import { cartContext } from "../../context/CartCOntext"
import { Link } from "react-router-dom"
import "./cartWidget.css"

const CartWidget = () => {
  const { cartTotalQuantity} =useContext(cartContext)
  const total = cartTotalQuantity()
  return (
    <Link to="/cart" className="cartwidget" style={{ textDecoration: 'none' }}>
      <img src={imgCart} alt="shopping cart" style={{width: "35px"}} />
      <p className="cartWidget-number">{ total >= 1 && total}</p>
   
    </Link>
  )
}

export default CartWidget
