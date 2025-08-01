import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContext, CartProvider } from './contexts/CartProvider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-xgbc1705u4ica338.us.auth0.com"
        clientId="0nLDgIcxmgfCV5QiLLUR64xuLdlArsGL"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </CartProvider>
  </BrowserRouter>,
)
