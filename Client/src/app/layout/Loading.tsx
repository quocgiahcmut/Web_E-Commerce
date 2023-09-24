import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

interface Props {
  message?: string
}

function Loading({ message = 'Loading...' }: Props) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box alignItems="center" display="flex" justifyContent="center" height="100vh">
        <CircularProgress size={100} color="secondary" />
        <Typography 
          variant="h4" 
          sx={{ justifyContent: 'center', position: 'fixed', top: '60%' }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  )
}

export default Loading