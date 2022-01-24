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
  const categories = {
    key: process.env.REACT_APP_GAMES_KEY,
    api: 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing',
    endpoint: '/'
  }
  const url = `${categories.api}`
  const [games, setGames] = useState([])
  const key = process.env.REACT_APP_KEY
  useEffect(()=> {
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
  console.log(games)
        return (
    <div className="App">
      {/* <Header /> */}
      <Navbar games={games}/>
      <Sidebar />
      {/* <div>
      <Search games={games}/>
      </div> */}
      <Routes>
        <Route path="/" element={<Empty />} />
        <Route path="/results" element={<Results games={games} />} />
        {/* <Route path="/games/:id" element={<GameDetails games={games} />} /> */}
      </Routes>
      {/* <Results civs={civs}/> */}
    </div>
  );
}

export default App;