import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import {useEffect, useState} from 'react'

export default function Home (){
  const [pokemons, setPokemons] = useState([])
    const urlPokes = []
    for (var i = 1; i < 1000; i++){
        urlPokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataPromises = urlPokes.map(url => fetch(url).then(response => response.json()));
          const fetchedData = await Promise.all(dataPromises);
          setPokemons(fetchedData);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
  
      fetchData();
  
    }, []);
    console.log(pokemons)

    return (
        <>
        carregarDados()
        <NavBar />
        <PokemonCard />
        </>
    )
}
