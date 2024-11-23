import React from 'react'
import "./cart.css"
import { useContext } from 'react'
import { cartContext } from '../../context/CartCOntext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)

  if(cart.length === 0 ){
    return(
      <div>
        <h2 class="cart-mainTitle"> No hay Productos en el Carrito</h2>
        <Link to="/" style={{ textDecoration: 'none' }} class="cart-Link-main">Volver al Inicio!</Link>
      </div>
    )
  }

  return (
    <div>
      <h2 class="cart-mainTitle" style={{ textDecoration: 'underline' }}>Tu Carrito</h2>
      <div class="card mb-3">
        
          {
            cart.map((productCart)=>(
              <div key={productCart.id}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={productCart.image} alt={productCart.name} />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-title">{productCart.name}</p>
                      <p class="card-text">Precio Unitario: ${productCart.price}</p>
                      <p class="card-text">Cantidad: {productCart.quantity}</p>
                      <p class="card-text"> Subtotal: $ {productCart.price * productCart.quantity}</p>
                      <button type="button" class="btn btn-danger" onClick={()=> deleteProductById(productCart.id)}>eliminar producto</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          <div class="cartActions">
            <p class="cartActions-text">Precio Total del carrito: $ {totalPrice()}</p>
            <button  type="button" class="btn btn-danger" onClick={deleteCart}>Vaciar Carrito</button>
            <Link to ="/checkout" type="button" class="btn btn-success">Finalizar Compra</Link>
          </div>
         </div>
       
    </div>  
  )
}

export default Cart
