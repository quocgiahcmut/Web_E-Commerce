import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'

import Catalog from '~/features/catalog/Catalog'
import { Product } from '~/app/models/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])
  
  return (
    <div>
      <Typography variant='h1'>E-Commerce Web</Typography>
      <Catalog products={products} />
    </div>
  )
}

export default App
