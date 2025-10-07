import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer.jsx'
import Error from './components/Error.jsx'
import { CartProvider } from './components/context/context.jsx'
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
        </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App
