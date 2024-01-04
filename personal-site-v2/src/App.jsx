import Header from './components/Header';
import Home from './pages/Home';
import Research from './pages/Research';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="research" element={<Research/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
