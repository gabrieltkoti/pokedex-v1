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

  const getPokemons = () => {
    const endpoints = []
    for(var i=1; i < 152; i++ ){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(endpoints)
    const response = axios.all(endpoints.map((endpoint) => 
      axios.get(endpoint))).then((res) => setPokemons(res))
  }

  console.log(pokemons)
    return (
      <>
        <NavBar />
        <Container maxWidth='false'>
          <Grid container> 
            {pokemons.map((pokemon, key) => (
              <Grid item xs={3}>
                <PokemonCard name={pokemon.data.name} key={key} image={pokemon.data.sprites.front_default} />
              </Grid>
            ))}
          </Grid>
        </Container>  
      </>
    )
}
