import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from './components/Layout'
import Error from './components/Error'
import Detail from './components/ItemListContainer/Detail'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<ItemListContainer/>}/>
            <Route path='/man' element={<ItemListContainer genero="hombre" />}/>
            <Route path='/woman' element={<ItemListContainer genero="mujer" />}/>
            <Route path="/productos/:id" element={<Detail/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
