import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { Product } from '~/app/models/product'
import { Link } from 'react-router-dom'

import { currencyFormat } from '~/app/util/helper'
import { useAppDispatch, useAppSelector } from '~/app/store/configuraStore'
import { addBasketItemAsync } from '~/features/basket/basketSlice'

interface Props {
  product: Product
}

function ProductCard({ product }: Props) {
  const { status } = useAppSelector(state => state.basket)
  const dispatch = useAppDispatch()

  return (
    <Card>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }} >
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'secondary.main' }
        }}
      />
      <CardMedia 
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={status.includes('pendingAddItem' + product.id)}
          onClick={() => dispatch(addBasketItemAsync({productId: product.id, quantity: 1}))}
          size="small"
        >
          Add to Cart
        </LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard