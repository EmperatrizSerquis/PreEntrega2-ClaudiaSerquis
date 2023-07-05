import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import TitleContainer from '../TitleContainer/TitleContainer'
import CartItem from "../CartItem/CartItem"


const CartList = () => {
    const { cart, totalAmount, emptyCart, deleteProduct } = useContext(CartContext)

    return (
        <div>
            <TitleContainer>
                <h2 className="text-primary">Cart Detail</h2>
                
            </TitleContainer> 
            <div className="cart-container">
                <div className="cart">
                    <h3 className="cart-heading">Shopping Cart</h3>
                    <h5 className="cart-action">Remove All</h5>
                </div>

                <div className="cart-content">
                    {
                        cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                    }

                    
                    <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="subtotal">Sub-total</div>
                                <div className="items">2 items</div>
                            </div>
                            <div className="total-amount">$$$</div>
                        </div>
                        <button className="button-cart">Checkout</button>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default CartList