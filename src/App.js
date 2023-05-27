// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';
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
      <div>
        <h1>React</h1>
        <div>
          <p>{this.title}</p>
          <p>{this.message}</p>
        </div>
      </div>
    )
  }
}

export default App;
