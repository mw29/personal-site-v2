import Header from './components/Header';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
