import { useEffect } from 'react'


const ItemCount = ({ stock, quantity, setQuantity,  handleAdd }) => {

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
            <button onClick={handleLess} className={quantity === 1 ? "btn btn-action" : "btn btn-shop"} disabled={quantity === 1}>-</button>
           {/*  VER COMO QUEDA CON BACKTICKS CLASE MIN 1.30 */}

            <span className="num">{quantity}</span>
            <button onClick={handlePlus} className="btn btn-action" disabled={quantity === stock}>+</button>
            <button onClick={handleAdd}  className={quantity === stock ? "btn btn-action" : "btn btn-shop"} >Add to Cart</button>
        </div>
    )
}

export default ItemCount