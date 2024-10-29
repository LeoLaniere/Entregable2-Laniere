import { getProducts } from "../data/data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const useProducts = () => {
    const [ products, setProducts] = useState([])
    const { idCategory } = useParams([])

    useEffect ( ()=> {
      getProducts()
      .then((dataProducts)=> {
        if(idCategory){
            const productsFilter = dataProducts.filter((product)=> product.idcategory === idCategory) 
            setProducts(productsFilter)
        }
        else{
        setProducts(dataProducts)
        }
      })
      .catch((error)=>{
        console.error(error)
      })
    }, [idCategory])

    return {products}
}

export default useProducts