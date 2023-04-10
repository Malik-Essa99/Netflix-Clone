import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList/>}/>
      </Routes>
    </>
  );
}

export default App;
