import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


export default function CartWidget() {

    const { showCartContent, totalItems } = useContext(CartContext)
    return (
        <div className="cart">

            <ShoppingCartCheckoutIcon color="action" /> 
            <button onClick={showCartContent}> 
            <Badge badgeContent={totalItems()} color="secondary">
                  
            </Badge>    
            </button>  
            {
                /* {totalItems()} ? <CartModal /> : null */
            }      
        </div>
    );
  }
