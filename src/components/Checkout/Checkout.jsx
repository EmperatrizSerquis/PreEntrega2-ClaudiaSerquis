import { useContext, useState, useEffect } from 'react'
import { CartContext, useCartContext } from "../../context/CartContext"
import { AuthContext } from '../../context/AuthContext'
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import Select from "../Select/Select"
/* import { Formik } from 'formik'
import * as Yup from 'yup' */




const Checkout = () => {
    const { cart, totalAmount, emptyCart } = useCartContext(CartContext)

    const { user } = useContext(AuthContext)

    const [orderId, setOrderId] = useState(null)

    const userEmail = localStorage.getItem('email') || ''

    const [emailUser, setEmailUser] = useState(userEmail)

    useEffect(() => {
        setEmailUser(user.email)
    }, [user])


    const [values, setValues] = useState({
        name: '',
        address: '',
        email: emailUser,
        payment: 'Cash'
    })

    const [errors, setErrors] = useState({
        nameError: '',
        addressError: '',
        emailError: ''
    })

    const [errorName, setNameError] = useState(false)
    const [errorAddress, setAddressError] = useState(false)
    const [errorEmail, setEmailError] = useState(false)

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
            setErrors({     
                ...errors,
                nameError: 'Your name is required.'
            })
            setNameError(true) 
            return
        }
        if (values.address.length === 0) {
            setErrors({
                ...errors,
                addressError: 'Your address is required.'
                
            })
            setAddressError(true)
            return
        }
        if (values.email.length === 0) {
            setErrors({
                ...errors,
                emailError: 'Your email is required.'
                
            })
            setEmailError(true)
            return
        }
        if (values.email != emailUser) {
            setErrors({
                ...errors,
                emailError: 'Your email must be the login email.'
            })
            setEmailError(true)
            return
        }

        setAddressError(false)
        setEmailError(false)
        setNameError(false) 

        const order = {
            client: values,
            items: cart,
            total: totalAmount(),
            date: new Date()
        }
        console.log(order)
        
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
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
        <div className="container">
            
            <div className="b-background">
            <div className='my-form'>
            <h2>Checkout</h2>
            <p>You are going to purchase your products with this information. Please check if all your data is correct.</p>
            <hr/>
            <form onSubmit={handleSubmit}>
            {  errorName  ? ( <span>{errors.nameError} </span>) : (<span> </span>)  }
                <input 
                    value={values.name}
                    type="text"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    name="name"
                />
                { errorAddress  ?  ( <span>{errors.addressError} </span>) : (<span> </span>)  }
                <input 
                    value={values.address}
                    type="text"
                    placeholder="Your address"
                    onChange={handleInputChange}
                    name="address"
                />
                { errorEmail  ?  ( <span>{errors.emailError} </span>) : (<span> </span>) }
                <input 
                    value={values.email}
                    type="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                    name="email"
                />
                <Select/>

                <button className="btn" type="submit">Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Checkout