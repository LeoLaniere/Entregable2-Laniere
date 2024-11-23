import { useState, useEffect } from "react";
/* import { getProducts } from "../../data/data"; */
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import db from "../../db/db.js";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState({})

    const { idProduct } = useParams()

    const getProductById = ()=>{
        const docRef = doc( db, "products", idProduct )
        getDoc (docRef)
        .then((dataDb)=>{
            const data = { id:dataDb.id, ...dataDb.data() }
            setProduct(data)
        })
    }
    useEffect (()=> {
        getProductById()
    } /* ,[idProduct] */)

    return(
        <ItemDetail product={product}/>
    )

}

export default ItemDetailContainer