import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartCOntext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  if(cart.length === 0 ){
    return(
      <div>
        <h2> No hay Productos en el Carrito</h2>
        <Link to="/">Volver al Inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {
        cart.map((productCart)=>(
          <div key={productCart.id}>
            <img src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p>Precio Unitario: ${productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio Parcial: {productCart.price * productCart.quantity}</p>
            <button onClick={()=> deleteProductById(productCart.id)}>eliminar producto</button>
          </div>
        ))
      }
      <p>precio Total: {totalPrice()}</p>
      <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
