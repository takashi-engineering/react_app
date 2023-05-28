// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';
import Button from './components/Button'
import { Component } from 'react';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={`/`} element={<Home />} />
//         <Route path={`/about`} element={<About />} />
//         <Route path={`/contents`} element={<Contents />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

class App extends Component {

  constructor(props) {
    super()
    this.title = props.title
    this.message = props.message
  }

  render() {
    return (
      <>
      <div className='container mx-auto px-8'>
        <h1 className='text-3xl font-bold text-center bg-lime-300'>React</h1>
        <div>
          <p>{this.title}</p>
          <p>{this.message}</p>
          <Button />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/contents`} element={<Contents />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
