import Add from "@mui/icons-material/Add"
import Delete from "@mui/icons-material/Delete"
import Remove from "@mui/icons-material/Remove"
import LoadingButton from "@mui/lab/LoadingButton"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "~/app/store/configuraStore"
import BasketSummary from "~/features/basket/BasketSummary"
import { addBasketItemAsync, removeBasketItemAsync } from "./basketSlice"
import { currencyFormat } from "~/app/util/helper"

function BasketPage() {
  const dispatch = useAppDispatch()
  const { basket, status } = useAppSelector(state => state.basket)



  if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map(item => (
              <TableRow
                key={item.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={item.pictureUrl} alt={item.name} style={{ height:50, marginRight: 20 }} />
                  <span>{item.name}</span>
                </TableCell>
                <TableCell align="right">{currencyFormat(item.price)}</TableCell>
                <TableCell align="center">
                  <LoadingButton
                    loading={status === 'pendingRemoveItem' + item.productId + 'remove'}
                    onClick={() => dispatch(removeBasketItemAsync({ productId: item.productId, quantity: 1, name: 'remove' }))}
                    color="error"
                  >
                    <Remove />
                  </LoadingButton>
                  {item.quantity}
                  <LoadingButton 
                    loading={status === 'pendingAddItem' + item.productId} 
                    onClick={() => dispatch(addBasketItemAsync({ productId: item.productId, quantity: 1 }))} 
                    color="error"
                  >
                    <Add />
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">{currencyFormat((item.price / 100) * item.quantity)}</TableCell>
                <TableCell align="right">
                  <LoadingButton 
                    loading={status === 'pendingRemoveItem' + item.productId + 'delete'}
                    onClick={() => dispatch(removeBasketItemAsync({ productId: item.productId, quantity: item.quantity, name: 'delete' }))}
                    color="error"
                  >
                    <Delete />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
    
  )
}

export default BasketPage