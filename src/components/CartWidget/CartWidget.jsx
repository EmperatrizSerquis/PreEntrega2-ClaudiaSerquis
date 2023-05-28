import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function CartWidget() {
    return (
        <div className="cart">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartCheckoutIcon color="action" />
            </Badge>           
        </div>
    );
  }
