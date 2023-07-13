import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from 'formik'
import * as Yup from 'yup'


const Checkout = () => {
    const { cart, totalAmount, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // validacion
        if (values.name.length === 0) {
            alert("Your Name is required")
            return
        }
        if (values.direccion.length === 0) {
            alert("Your Address is required")
            return
        }
        if (values.email.length === 0) {
            alert("Your Email is required")
            return
        }

        const orden = {
            client: values,
            items: cart,
            total: totalAmount(),
            date: new Date()
        }
        
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })  
            .catch(err => console.log(err))
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Your Purchase was succesfully registered!</h2>
                <hr/>
                <p>Your Order number is: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>
            
            <form onSubmit={handleSubmit}>
                <input 
                    value={values.name}
                    type="text"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    name="name"
                />
                <input 
                    value={values.address}
                    type="text"
                    placeholder="Your address"
                    onChange={handleInputChange}
                    name="address"
                />
                <input 
                    value={values.email}
                    type="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                    name="email"
                />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Checkout