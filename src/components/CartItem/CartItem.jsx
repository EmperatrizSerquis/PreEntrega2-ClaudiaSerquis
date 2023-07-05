
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const CartItem = ({id, name, price, brand, img, stock, quantity}) => {

    return (
        <div className="cart-item" key={id}>
                        <div className="image-box">
                            <img src={img} alt={name} />
                        </div>
                    
                        <div className="cart-about">
                            <h2 className="cart-title">{name}</h2>
                            <h3 className="cart-subtitle">{brand}</h3>
                            <button onClick={() => deleteProduct(id)}
                className="cart-action">
                <DeleteForeverIcon color="secondary" />   </button> 
                        </div>
                        <div className="counter">
                            <div className="cart-btn">+</div>
                            <div className="count">{quantity}</div>
                            <div className="cart-btn">-</div>
                        </div>
                        <div className="prices">
                            <div className="amount">{price}</div>
                        </div>
                    </div>
        
    )
}

export default CartItem

