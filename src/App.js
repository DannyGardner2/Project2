import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Empty from './components/Empty';
import GameDetails from './components/GameDetails';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';

function App() {
  const [ genre, setGenre ] = useState('?category=social')
  const [games, setGames] = useState([])
  const categories = {
    key: process.env.REACT_APP_GAMES_KEY,
    api: `https://free-to-play-games-database.p.rapidapi.com/api/games${genre}`,
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
  }, [genre])

  function handleChange(e) {
    e.preventDefault()
    setGenre(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Navbar games={games} />
      <Sidebar
        handleChange={handleChange}
      />

      <Routes>
        <Route path="/" element={<Empty />} />
        <Route path="/results/:genre" element={<Results games={games} />} />
        <Route path="/games/:id" element={<GameDetails games={games} />} />
      </Routes>
    </div>
  );
}

export default App;