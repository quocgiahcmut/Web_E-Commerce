import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Container component={Paper} style={{height: 400}}>
      <Typography gutterBottom variant="h3">
        Oops - we could not find what your are looking for!
      </Typography>
      <Divider />
      <Button component={Link} to="/catalog" fullWidth>Go back to the shop</Button>
    </Container>
  )
}

export default NotFound