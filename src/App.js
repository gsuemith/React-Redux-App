import { useEffect, useState } from 'react';
import axios from 'axios'

import CharacterList from './components/CharacterList'

import { URL, PUBLIC_KEY, PRIVATE_KEY } from './keys'

import './App.css';

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    let md5 = require('md5')
    let ts = Date.now();
    const params = {
      "apikey": PUBLIC_KEY,
      "ts": ts,
      "hash": md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    }
    const headers = {
      Accept: '/'
    }

    axios.get(`${URL}/events/29/characters?limit=60&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${params.hash}`)
      .then(res => {
        setCharacters(res.data.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <CharacterList characters={characters}/>
    </div>
  );
}
// 01 02 03 04 05 06 07 08
// 16 15 14 13 12 11 10 09
// 08 07 06 05
// 04 03
// 02
// Avengers 1009165
// Fantastic Four 1009299 
// X-Men 1009726
export default App;
