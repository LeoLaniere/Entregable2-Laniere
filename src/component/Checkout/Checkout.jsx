import { useState, useContext } from 'react'
import { cartContext } from '../../context/CartCOntext'
import { Timestamp, collection, addDoc, CollectionReference } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import validateForm from '../../utils/validateForms.js'
import { toast, ToastContainer } from 'react-toastify'
import "./checkout.css"


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname:"",
        phone:"",
        email:""
    })
    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext(cartContext)

    const handleChangeInput = (event)=>{
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = async (event)=>{
        event.preventDefault ()
        const order = {
            buyer:{ ...dataForm },
            products:{ ...cart },
            date: Timestamp.fromDate(new Date() ),
            total: totalPrice()
        }

        const response = await validateForm(dataForm)
        if(response.status === "success"){
            uploadOrder(order)}
        else{
            toast.error(response.message)
        }
    }

    const uploadOrder = (newOrder) =>{
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response)=>{
                setIdOrder(response.id)
            })
            .finally(()=>{
                toast.success("Orden generada correctamente")
                deleteCart()
            })
    }

    return (

        <div>
            {
            idOrder === null ?(
            <>
                <h2 class="checkout-mainTitle"> Finalizar compra </h2>
                <h5 class="checkout-secTitle">Detalles de Facturacion</h5>
                    <div class="row">
                        <form class ="checkout-Form" onSubmit={handleSubmitForm} >

                                <div class="col">
                                    <div class="mb-4">
                                        <label for="inputFullname" class="form-label">Nombre Completo</label>
                                        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder=' Nombre...' />
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="mb-4">
                                        <label for="inputphone" class="form-label">Numero de Telefono</label>
                                        <input type="numbre" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder=' Telefono...'/>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="mb-4">
                                        <label for="inputEmail" class="form-label">Email</label>
                                        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder=' Email...'/>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-success">Terminar mi compra</button>
                            
                        </form>
                </div>
            </>
            ) :(
                <div>
                    <h2 class="checkout-mainTitle">Orden Generada Correctamente!</h2>
                    <p class="checkout-secTitle">Su numero de orden es : {idOrder}</p>
                    <Link to="/" class="checkout-Link" style={{ textDecoration: 'none' }}>Volver al inicio</Link>
                </div>
            )
            }
        </div>
    )
}

export default Checkout
