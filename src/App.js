import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/favorites' element={<Home/>}/> */}
      </Routes>
    </>
  );
}

export default App;
