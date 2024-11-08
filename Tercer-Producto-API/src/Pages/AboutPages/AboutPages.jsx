import "./AboutPages.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/Chardcard/Chardcard";

const AboutPage = () => {
  const [data, setData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dragonball-api.com/api/characters/${id}`)
      .then((char) => setData(char.data));
  }, []);

  return (
    <main id="character-page">
      <h1 id="title-character">Información del personaje {data.name}</h1>
      <CharCard img={data.image}
                nombre={data.name}
                raza={data.race}
                genero={data.gender}
                ki={data.ki}
                kiMax={data.maxKi}
                grupo={data.affiliation} />
    </main>
  );
};

export default AboutPage;
