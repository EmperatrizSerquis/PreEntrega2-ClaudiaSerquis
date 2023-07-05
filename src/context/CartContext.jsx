import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

const startCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(startCart)

    const [showCart, setShowCart] = useState(false)
  
    const addToCart = (item) => {
      setCart([...cart, item])
    }

    const deleteProduct = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    const totalAmount = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const totalItems = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const showCartContent = () => {
        setShowCart(true)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            showCartContent,
            addToCart,
            isInCart,
            totalAmount,
            emptyCart,
            deleteProduct,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}