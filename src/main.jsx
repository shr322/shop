import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App from './App_연습.jsx'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
// import store from "./store";
import store from "./store_연습.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
