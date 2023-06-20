import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartModal from '../CartModal/CartModal'


export default function CartWidget(show, handleShow) {
    return (
        <div className="cart">
            <ShoppingCartCheckoutIcon color="action" /> 
            <button onClick={handleShow}> 
            <Badge badgeContent="2" color="secondary">
                  
            </Badge>    
            </button>  
            {
                show ? <CartModal /> : null
            }      
        </div>
    );
  }
