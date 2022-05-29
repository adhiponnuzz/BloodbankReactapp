import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signin from './component/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';
import Search from './component/Search';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Signup/>}/>
      <Route path="/sign" exact element={<Signin/>}/>
      <Route path="/view" exact element={<View/>}/>
      <Route path="/search" exact element={<Search/>}/>




    </Routes>
    
    
    
    </BrowserRouter>


    
    
    
    </>
    
  );
}

export default App;
