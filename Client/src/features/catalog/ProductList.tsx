import Grid from '@mui/material/Grid'
import { Product } from '~/app/models/product'
import { useAppSelector } from '~/app/store/configuraStore'
import ProductCard from '~/features/catalog/ProductCard'
import ProductCardSkeleton from './ProductCardSkeleton'

interface Props {
  products: Product[]
}

function ProductList({ products }: Props) {
  const { productsLoaded } = useAppSelector(state => state.catalog)

  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={4} key={product.id} >
          {!productsLoaded ? (
            <ProductCardSkeleton />
          ) : (
            <ProductCard product={product} />
          )}
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList