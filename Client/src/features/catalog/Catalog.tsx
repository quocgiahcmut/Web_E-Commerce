import { useEffect } from 'react'
import ProductList from './ProductList'
import Loading from '~/app/layout/Loading'
import { useAppDispatch, useAppSelector } from '~/app/store/configuraStore'
import { fetchProductsAsync, productSelectors } from './catalogSlice'

function Catalog() {
  const products = useAppSelector(productSelectors.selectAll)
  const { productsLoaded, status } = useAppSelector(state => state.catalog)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync())
  }, [productsLoaded, dispatch])

  if (status.includes('pending')) return <Loading message="loading products..." />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Catalog