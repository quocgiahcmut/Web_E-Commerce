import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'

function ServerError() {
  const {state} = useLocation()

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography gutterBottom variant="h3" color="secondary">
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1">{state.error.details || 'Internal server error'}</Typography>
        </>
      ) : (
        <Typography gutterBottom variant="h5">Server error</Typography>
      )}
    </Container>
  )
}

export default ServerError