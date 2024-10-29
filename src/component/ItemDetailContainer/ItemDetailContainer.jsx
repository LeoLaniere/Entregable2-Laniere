import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect (()=> {
        getProducts()
            .then((data)=> {
                const findProduct = data.find((productData)=> productData.id === idProduct)
                setProduct(findProduct)
            }   )
    } ,[idProduct])

    return(
        <ItemDetail product={product}/>
    )

}

export default ItemDetailContainer