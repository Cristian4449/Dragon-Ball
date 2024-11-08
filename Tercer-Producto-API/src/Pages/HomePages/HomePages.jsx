import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./HomePages.css";
import axios from 'axios';

import CharCard from '../../Components/Chardcard/Chardcard';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios(`https://dragonball-api.com/api/characters`)      
      .then(char=>setData(char.data.items))
    },[]);

  return (
    <main id='home-page'>
      <div>
      <img id ="LogoHeader" src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRLBBjVB5er_UCv20b0GJOeYiCw-0Q4n-8LNnNaisaOGhh1WxkxXsaD5673B7m_TMz8DdD4P69fVOuB9oHv9y9kIesaofb3PptP4gB2myA6w.png?r=35a" alt="Logo Serie" />
      </div>
        <div>
          <h1>Home page</h1>
        </div>        
        <div id='characters'>
        {
            data.map((element)=>
              <div key={element.id}>
                <Link to={"/details/"+element.id}>
                <CharCard
                  img={element.image}
                  nombre={element.name}
                  raza={element.race}
                  genero={element.gender}
                  ki={element.ki}
                  kiMax={element.maxKi}
                  grupo={element.affiliation}
                />
                </Link>            
              </div>
            )                
        }
        </div>
    </main>
  )
}

export default HomePage