import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import {useEffect, useState} from 'react'

export default function Home (){
    const urlPokes = []
    for (var i = 1; i < 1000; i++){
        urlPokes.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(urlPokes)
    const [pokemons, setPokemons] = useState([])

    const urlAPI = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'

    useEffect(function () {
        async function carregarDados() {
          const response = await urlPokes.map((urlPoke) => fetch(urlPoke)) 
          const data = await response.json()
    
          const results = data.results
          setPokemons(results)
        }
    
        carregarDados()
      }, [])

      //console.log(pokemons)
    return (
        <>
        carregarDados()
        <NavBar />
        <PokemonCard />
        </>
    )
}