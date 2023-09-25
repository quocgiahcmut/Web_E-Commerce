import Typography from '@mui/material/Typography'
import { decrement, increment } from './counterSlice'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '~/app/store/configuraStore'

function ContactPage() {
  // const dispatch = useDispatch()
  // const { data, title } = useSelector((state: CounterState) => state)

  const dispatch = useAppDispatch()
  const { data, title } = useAppSelector(store => store.counter)
  
  return (
    <>
      <Typography variant="h2">
        {title}
      </Typography>
      <Typography variant="h3">
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} variant="contained" color="error">Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} variant="contained" color="secondary">Increment</Button>
        <Button onClick={() => dispatch(increment(5))} variant="contained" color="primary">Increment by 5</Button>
      </ButtonGroup>
    </>
  )
}

export default ContactPage