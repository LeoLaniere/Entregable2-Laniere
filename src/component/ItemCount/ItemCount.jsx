import { useState } from "react"

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
        <div>
            <button onClick={handleClickSubstract}> - </button>
            <p>{count}</p>
            <button onClick={handleClickAdd}> + </button>
            <button class="CartBtn" onClick={ ()=>addProduct(count) }>
                <p class="CartBtn-text">Agregar al Carrito</p>
            </button>
        </div>
    )
}
export default ItemCount