import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'

import { Product } from "~/app/models/product"

interface Props {
  products: Product[]
}

function Catalog({products}: Props) {
  return (
    <>
      <List>
        {products.map(product => (
          <ListItem key={product.name} >
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Catalog