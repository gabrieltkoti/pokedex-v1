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
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((res) => setPokemons(res.data.results))
    .catch((err) => console.log(err))
  }

  console.log(pokemons)
    return (
      <>
        <NavBar />
        <Container maxWidth='false'>
          <Grid container> 
            {pokemons.map((pokemon) => (
              <Grid item xs={3}>
                <PokemonCard name={pokemon.name} />
              </Grid>
            ))}
          </Grid>
        </Container>  
      </>
    )
}
