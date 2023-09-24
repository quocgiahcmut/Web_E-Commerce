import { useState, useEffect } from 'react'

import { Product } from "~/app/models/product"
import ProductList from './ProductList'
import agent from '~/app/api/agent'
import Loading from '~/app/layout/Loading'

function Catalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loading message="loading products..." />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Catalog