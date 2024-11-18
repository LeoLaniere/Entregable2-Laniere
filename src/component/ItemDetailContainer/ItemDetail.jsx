import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { cartContext } from '../../context/CartCOntext'

const ItemDetail = ({product}) =>{

  const { cart, addProductInCart } = useContext(cartContext)

  const addProduct= (count) =>{

    const prodcutCart ={...product, quantity:count}
    addProductInCart(prodcutCart)

  }
    return (
        <div className="item-detail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={product.image} class="img-fluid" alt={product.name}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <ItemCount stock ={product.stock} addProduct={addProduct}/>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default ItemDetail