import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const RegisterPage = () => {

    const { register, googleLogin, error, user } = useContext(AuthContext)

    const [successMessage, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    

    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

   

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        register(values)  

        if(user.logged) {
            e.target.reset()
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false) 
                navigate("/products")
            }, 6000)
            return
        }
       
        if (error) {
            setErrorMessage(true)
            setTimeout(() => {
                setErrorMessage(false) 
            }, 6000)
            return
           
        } 

    }

 

    return (
        <div className='container'>
        <div className="b-background"> 
            <div className="promo-info">
            <h3> GET MORE BENEFITS LIKE DISCOUNTS, FREE SHIPPING AND MORE.</h3> 
            </div>
            <div className="promo-checkout">
            <h3> REGISTER NOW  AND</h3> 
            <h3> THANK YOU </h3> 
            <h3> FOR SHOPPING WITH US! </h3>
            </div>
              
            <div className='my-form'>
                <h2>Register</h2>
                <hr/>

            <form onSubmit={handleSubmit}>
            <input 
                    value={values.name}
                    onChange={handleInputChange}
                    type='text' 
                    placeholder='Name'
                    name='name'
                />
                <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type='email' 
                    placeholder='Email'
                    name='email'
                    required
                />
                <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type='password' 
                    placeholder='Password'
                    name='password'
                    required
                />

                {errorMessage && <p className="error">Something was wrong. Password must contain at least 6 characters and you should not be previousy registered</p>}

                {successMessage && <p className="success">WELCOME <b> {values.name}</b>. You will be redirected to the previous page.</p>}

                <button className='btn' type='submit'>Submit</button>
                
            </form>
            <div className="log-links">
             <button className='btn mt-20' onClick={googleLogin}>Login with Google</button>
            <div className="link-register">
                <Link  to="/register"> Are you Registered? Go to Login Now <ArrowOutwardIcon /> </Link>
                
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default RegisterPage