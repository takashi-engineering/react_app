import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/contents`} element={<Contents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
