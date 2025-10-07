import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error'
import { CartProvider } from './components/context/context'
import { useEffect } from 'react'
import { getItems} from './firebase'

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
