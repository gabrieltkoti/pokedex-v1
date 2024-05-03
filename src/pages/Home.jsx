import axios from "axios";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import {useEffect, useState} from 'react'
import { Container, Grid } from "@mui/material";

export default function Home (){
  const [pokemons, setPokemons] = useState([])
  useEffect (() => {
    getPokemons()
  }, [])

  /*const getPokemons = () => {
    const endpoints = []
    for(var i=1; i < 152; i++ ){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(endpoints)
    const response = axios.all(endpoints.map((endpoint) => 
      axios.get(endpoint))).then((res) => setPokemons(res))
  }*/

  const getPokemons = async () => {
    try {
      const endpoints = [];
      for (let i = 1; i <= 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      const responses = await axios.all(endpoints.map(endpoint => axios.get(endpoint)));
      const pokemonData = responses.map(response => response.data);
      setPokemons(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  console.log(pokemons)
    return (
      <>
        <NavBar />
        <Container maxWidth='false'>
          <Grid container> 
            {pokemons.map((pokemon, key, types) => (
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <PokemonCard 
                name={pokemon.name} 
                key={key} 
                image={pokemon.sprites.front_default} 
                types={pokemon.types} />
              </Grid>
            ))}
          </Grid>
        </Container>  
      </>
    )
}
