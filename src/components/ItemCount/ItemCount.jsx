import * as React from 'react';
import { useState, useEffect } from "react"


const ItemCount = ({ stock, quantity = Number(localStorage.getItem('quantity')) || 0, setQuantity,  handleAdd }) => {


    const handlePlus = () => {       
        quantity < stock && setQuantity(quantity + 1)
    }

    const handleLess = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    useEffect(() => {
        localStorage.setItem('quantity', quantity)
    }, [quantity])


    return (
        <div className="counter">
            <button onClick={handleLess} className="btn btn-action">-</button>
            <span className="num">{quantity}</span>
            <button onClick={handlePlus} className="btn btn-action">+</button>
            <button onClick={handleAdd}  className="btn btn-action">Add to Cart</button>
        </div>
    )
}

export default ItemCount