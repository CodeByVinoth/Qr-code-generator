import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './qrcode.css'
import { Qrcode } from './Qrcode.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Qrcode/>

  </StrictMode>,
)
