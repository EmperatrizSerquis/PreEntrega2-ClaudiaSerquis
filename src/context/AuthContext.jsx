import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null
    })

    const [error, setError] = useState(false)
  

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => setError(true))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => setError(true))
    }

    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                setUser({
                    logged: true,
                    email: user.email
                })
                setError(false)
              

            } else {
                setUser({
                    logged: false,
                    email: null
                })
                setError(true)
                
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{googleLogin, user, login, register, logout, error}}>
            {children}
        </AuthContext.Provider>
    )
}