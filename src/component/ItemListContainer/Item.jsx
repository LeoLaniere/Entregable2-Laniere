import './Item.css'
import { Link } from "react-router-dom"

const Item =({ product }) =>{
    return(
        <div className="card-Product">
            <img class="card-img-top" src={product.image} alt="" />
            <div class="card-body">
                <h2 class="card-title" >{product.name}</h2>
                <h4>{product.category}</h4>
                <p>Precio: ${product.price}</p>
                <button class="boton-detalle">
                    <Link to={"/detail/"+ product.id} class="boton-text" >Ver detalle</Link>
                </button>
            </div>
        </div>
    )
}
export default Item