import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products.jsx';
import ProductDetail from './components/ProductDetail';
import Card from './components/ShopingCart/Card';
import { ThemeProvider } from './ThemeContext'
import store from './store'
import { Provider } from 'react-redux'
import './Styles/App.css';
import { CardProvider } from './components/ShopingCart/CardContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardProvider>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/card" element={<Card />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </CardProvider>
  </React.StrictMode>
);