// import modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Home } from '@/pages/Home/Home.jsx';
import { NossaProposta } from './pages/NossaProposta/NossaProposta.jsx';
import { ParaEmpresas } from './pages/ParaEmpresas/ParaEmpresas.jsx';
import { NossaEquipe } from './pages/NossaEquipe/NossaEquipe.jsx';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nossa-proposta' element={<NossaProposta />}></Route>
        <Route path='/para-empresas' element={<ParaEmpresas />}></Route>
        <Route path='/nossa-equipe' element={<NossaEquipe />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
