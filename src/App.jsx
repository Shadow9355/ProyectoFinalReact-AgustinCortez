import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from './components/Layout'
import Error from './components/Error'
import Detail from './components/ItemListContainer/ItemDetail'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer />} />
          <Route path="categoria/:genero" element={<ItemListContainer />} />
          <Route path="product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
