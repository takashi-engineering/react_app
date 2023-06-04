// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';
import Button from './components/Button'
import { Component } from 'react';
import StateSample from './pages/StateSample';
import StateSample2 from './pages/StateSample2';
import ListSample from './pages/ListSample';
import MessageSample from './pages/MessageSample';

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

  // constructor(props) {
  //   super()
  //   this.title = props.title
  //   this.message = props.message

  //   this.state = {
  //     msg:'Hello Component!',
  //     count:0,
  //   }

  //   let timer = setInterval(()=>{
  //     this.setState({
  //       count: this.state.count + 1,
  //       msg: "[ count: " + this.state.count + " ]"
  //     })
  //   }, 1000)
  // }

  render() {
    return (
      <>
      {/* <div className='container mx-auto px-8'>
        <h1 className='text-3xl font-bold text-center bg-lime-300'>React</h1>
        <div>
          <p>{this.title}</p>
          <p>{this.message}</p>
          <p>{this.state.msg}</p>
          <Button />
        </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/contents`} element={<Contents />} />
          <Route path={`/state-sample`} element={<StateSample />} />
          <Route path={`/state-sample2`} element={<StateSample2 />} />
          <Route path={`/list-sample`} element={<ListSample />} />
          <Route path={`/message-sample`} element={<MessageSample />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
