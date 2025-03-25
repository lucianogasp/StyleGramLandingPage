// react-router-dom imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.jsx';
import NossaComunidade from './pages/NossaComunidade/NossaComunidade.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nossa-comunidade' element={<NossaComunidade />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
