import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import Header from '~/app/layout/Header'
import { ToastContainer } from 'react-toastify'
import { getCookie } from '~/app/util/helper'
import agent from '~/app/api/agent'
import Loading from '~/app/layout/Loading'
import { useAppDispatch } from '~/app/store/configuraStore'
import { setBasket } from '~/features/basket/basketSlice'

function App() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [setBasket])

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }

  if (loading) return <Loading message="Initialising app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
