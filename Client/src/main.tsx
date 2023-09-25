import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '~/app/layout/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '~/app/router/Router'
import { Provider } from 'react-redux'
import { store } from './app/store/configuraStore'
import { fetchProductsAsync } from './features/catalog/catalogSlice'

store.dispatch(fetchProductsAsync())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
