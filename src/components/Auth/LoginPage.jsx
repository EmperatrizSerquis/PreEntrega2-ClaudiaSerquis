import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const LoginPage = () => {
    const { login, googleLogin, error, user } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [successMessage, setSuccess] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        if (values.email.length === 0) {
            alert("Your Email is required")
            return
        }
        if (values.password.length < 6) {
            alert("Your Password must have at least 6 characters")
            return
        }

        login(values)
       
        if(user.logged) {

            setSuccess('Bienvenido')

            e.target.reset() 
            navigate(-2)

            return

        } 

        if(error) {

            setErrorMessage('Something was wrong. Go to Register Page if you are not registered yet.')
            setTimeout(() => {
                setErrorMessage(null) 
            }, 6000)

            return
        }
       navigate(-1)
        
    }

    return (
        <div className='container'>
            <div className="b-background"> 
                <div className="promo-info">
                <h3> GET MORE DISCOUNTS BY BEING A MEMBER</h3> 
                </div>
                <div className="promo-checkout">
                <h3> You NEED to LOGIN NOW</h3> 
                </div>
                  
                <div className='my-form'>
                    <h2>Login</h2>
                    <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        onChange={handleInputChange}
                        type='email' 
                        placeholder='Email'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        onChange={handleInputChange}
                        type='password' 
                        placeholder='Password'
                        name='password'
                    />
                    { error && errorMessage}

                    { successMessage && successMessage
                    }
                    
                    <button className='btn' type='submit'>Submit</button>
                    
                </form>
                
                     
                <div className="log-links">
                 <button className='btn mt-20' onClick={googleLogin}>Login with Google</button>
                <div className="link-register">
                    <Link  to="/register"> Or Go to Register <ArrowOutwardIcon /> </Link>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginPage