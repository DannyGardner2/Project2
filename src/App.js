import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Empty from './components/Empty';
import GameDetails from './components/GameDetails';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import About from './components/About';

function App() {
  const [games, setGames] = useState([])
  const categories = {
    key: process.env.REACT_APP_GAMES_KEY,
    api: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    endpoint: '/'
  }
  const url = `${categories.api}`
  const key = process.env.REACT_APP_GAMES_KEY
  useEffect(() => {
    fetch(url, {

      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": `${key}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setGames(res)
      })
  }, [])

  return (
    <div className="App">
      <Navbar games={games} />
      {/* <Sidebar /> */}
      <div className='main'>
        <Routes>
          <Route path="/" element={<Empty />} />
          <Route path="/about" element={<About />} />
          <Route path="/results/:genre" element={<Results games={games} />} />
          <Route path="/games/:id" element={<GameDetails games={games} />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;