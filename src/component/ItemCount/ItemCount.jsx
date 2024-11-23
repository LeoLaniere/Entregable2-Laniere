import { useState } from "react"
import './ItemCount.css'
import { right } from "@popperjs/core"

const ItemCount = ({ stock, addProduct}) => {
    const [count, setCount] = useState(1)

    const handleClickSubstract = () =>{
        if (count > 1){
            setCount (count - 1)
        }
    }
    const handleClickAdd = () =>{
        if (count < stock){
            setCount (count + 1)
        }
    }

    return (
        <div class="card-quant">
            <button type="button" class="btn btn-outline-secondary" onClick={handleClickSubstract}> - </button>
            <p class ="card-quant-num">{count}</p>
            <button type="button" class="btn btn-outline-secondary" onClick={handleClickAdd}> + </button>
            <button class="CartBtn" onClick={ ()=>addProduct(count) }>
                <p class="CartBtn-text">Agregar al Carrito</p>
            </button>
        </div>
    )
}
export default ItemCount