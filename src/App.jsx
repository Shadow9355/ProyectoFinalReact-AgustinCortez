import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { useEffect } from 'react'
import { getItems} from './firebase.js'

function App() {

  useEffect(() => {
    getItems()
  }, []);
  

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer />} />
          <Route path="/categoria/:genero" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App
