import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MyLogo from '/logo.svg'

const ItemListContainer = ( {producto} ) => {

    return (
        <div class="products">
            <h2 className="products__title">Productos {producto}</h2>
            <Card variant="outlined">
                <Grid container spacing={12}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="products__container">
                    <Grid item xs={4} spacing={2} className="products__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><Link href="#"><img src={MyLogo} className="products__product__image" alt="Light logo" /></Link></Box>
                    </Grid>
                    <Grid item xs={4} spacing={2} className="products__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><Link href="#"><img src={MyLogo} className="products__product__image" alt="Light logo" /></Link></Box>
                    </Grid>
                    <Grid item xs={4} spacing={2} className="products__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><Link href="#"><img src={MyLogo} className="products__product__image" alt="Light logo" /></Link></Box>
                    </Grid>
                
                </Grid>
            </Card>

        </div>
    )
}

export default ItemListContainer