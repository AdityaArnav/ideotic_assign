import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Auth  from './components/Auth/Auth';
import Breed from './components/Breed/Breed';
import RandomBreed from './components/RandomBreed/RandomBreed';
import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Auth/>}/>
        <Route path='/allbreed' element={<Breed/>}/>
        <Route path='/randombreed' element={<RandomBreed/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
