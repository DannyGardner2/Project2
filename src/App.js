import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { Route, Routes } from 'react-router-dom';
import Empty from './components/Empty';
import CivDetails from './components/CivDetails';
import Header from './components/Header';

// const API = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"

function App() {
  const [civs, setCivs] = useState([])
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
  // const url = '/civs.json'

  useEffect(()=> {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setCivs(res.civilizations)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <Navbar civs={civs}/>
      {/* <div>
      <Search civs={civs}/>
      </div> */}
      <Routes>
        <Route path="/" element={<Empty />} />
        <Route path="/civ" element={<Results civs={civs} />} />
        <Route path="/civdetails/:id" element={<CivDetails civs={civs} />} />
      </Routes>
      {/* <Results civs={civs}/> */}
    </div>
  );
}

export default App;