import { createContext, useState } from "react";

const cartContext = createContext()

const CartPovider= ({ children }) =>{
    const [cart, setCart] =useState([])

    const addProductInCart = (newProduct)=>{
        const tempCart = [...cart]
        const indexProduct = cart.findIndex( ( productCart)=> productCart.id=== newProduct.id)

        if (indexProduct >=0){
            tempCart[indexProduct].quantity=tempCart[indexProduct].quantity + newProduct.quantity
            setCart( tempCart)
        }else{
            setCart( [...cart, newProduct])
        }
    }

    const cartTotalQuantity =() =>{
        
        const quantity = cart.reduce( (total, productCart )=> total+productCart.quantity, 0)
        return quantity
    }

    const totalPrice =()=> {
        const price =cart.reduce((total, productCart)=> total + (productCart.price * productCart.quantity), 0)
        return price
    }

    const deleteProductById = (idProduct) =>{
        const productsFilter = cart.filter ( (productCart)=> productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const deleteCart =()=>{
        setCart([])
    }
    return(
        <cartContext.Provider value ={ { cart, addProductInCart, cartTotalQuantity, totalPrice, deleteProductById, deleteCart }}>
            {children}

        </cartContext.Provider>
    )

}

export { cartContext, CartPovider}