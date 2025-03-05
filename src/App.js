import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/pages/Home';
import MemoryGames from './components/pages/MemoryGames';
import './App.css';

function App() {
  return (
    <>
        <nav>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/memorygame' className='nav-item'>Memory Games</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/memorygame' element={<MemoryGames />} />
        </Routes>
    </>
  );
}

export default App;
