import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/listacategorias/ListarCategorias'
import './App.css'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria'



function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} /> 
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App

