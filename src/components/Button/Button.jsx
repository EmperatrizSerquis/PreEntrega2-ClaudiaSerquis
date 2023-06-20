
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function MyApp() {
  return (
    <div className="center">
      <Button variant="contained" color="secondary">
      <Link  to={"/products"}>SHOP NOW</Link></Button>
    </div>
  );
}

