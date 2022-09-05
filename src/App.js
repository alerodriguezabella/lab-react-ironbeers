import './App.css';
import HomePage from './pages/HomePage'
import BeersPage from './pages/BeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/beers' element={<BeersPage/>} />
        <Route path='/beers/:id' element={<SingleBeerPage/>} />
        <Route path='/random-beer' element={<RandomBeerPage/>} />
        {/* <Route path='/new' element={<HomePage/>} /> */}
        {/* <Route path='/search?q={query}' element={<HomePage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
