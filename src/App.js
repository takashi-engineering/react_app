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
import FormSample from './pages/FormSample';
import ContextSample from './pages/ContextSample';
import ProviderSample from './pages/ProviderSample';
import ThemeSample from './pages/ThemeSample';
import HookSample from './pages/hooks/HookSample';
import HookCountSample from './pages/hooks/HookCountSample';
import HookTwoStateSample from './pages/hooks/HookTwoStateSample';
import HookSample2 from './pages/hooks/HookSample2';
import HookFormSample from './pages/hooks/HookFormSample';
import UseEffectSample from './pages/hooks/UseEffectSample';
import UseEffectSample2 from './pages/hooks/UseEffectSample2';
import OriginalHookSample from './pages/hooks/OriginalHookSample';
import OriginalHookSample2 from './pages/hooks/OriginalHookSample2';
import OriginalHookSample3 from './pages/hooks/OriginalHookSample3';
import LocalStorageSample from './pages/hooks/LocalStorageSample';
import MemoFrame from './pages/memo/MemoFrame';

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
          <Route path={`/form-sample`} element={<FormSample />} />
          <Route path={`/context-sample`} element={<ContextSample />} />
          <Route path={`/provider-sample`} element={<ProviderSample />}/>
          <Route path={`/theme-sample`} element={<ThemeSample />} />
          <Route path={`/hook-sample`} element={<HookSample />} />
          <Route path={`/hook-count-sample`} element={<HookCountSample />} />
          <Route path={`/hook-two-state-sample`} element={<HookTwoStateSample />} />
          <Route path={`/hook-sample2`} element={<HookSample2 />} />
          <Route path={`/hook-form-sample`} element={<HookFormSample />} />
          <Route path={`/use-effect-sample`} element={<UseEffectSample />} />
          <Route path={`/use-effect-sample2`} element={<UseEffectSample2 />} />
          <Route path={`/original-hook-sample`} element={<OriginalHookSample />} />
          <Route path={`/original-hook-sample2`} element={<OriginalHookSample2 />} />
          <Route path={`/original-hook-sample3`} element={<OriginalHookSample3 />} />
          <Route path={`/local-storage-sample`} element={<LocalStorageSample />} />
          <Route path={`/memo`} element={<MemoFrame />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
