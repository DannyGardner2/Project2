import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Empty from './components/Empty';
import GameDetails from './components/GameDetails';

function App() {
  const [games, setGames] = useState([])
  const url = "https://www.freetogame.com/api/games"
  useEffect(()=> {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "cee1cf7f77mshd2fc03f83c8253bp155e54jsn3d63e510da99"
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
      {/* <div>
      <Search games={games}/>
      </div> */}
      <Routes>
        <Route path="/" element={<Empty />} />
        <Route path="/games" element={<Results games={games} />} />
        <Route path="/games/:id" element={<GameDetails games={games} />} />
      </Routes>
      {/* <Results civs={civs}/> */}
    </div>
  );
}

export default App;