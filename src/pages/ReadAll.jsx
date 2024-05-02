import { useState useEffect } from 'react'
import { Card } from '../../components/PokemonCard/PokemonCard'

export default function ReadAll () {
    const [pokemons, setPokemons] = useState([])

    const urlAPI = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'

    useEffect(function () {
        async function carregarDados() {
          const response = await fetch(urlAPI)
    
          const data = await response.json()
    
          const results = data.results
          setPokemons(results)
        }
    
        carregarDados()
      }, [])

      return (
        <>
            <div className="cards">
                {itens.map(function (elemento) {
                    return <Card item={elemento} key={`card_${elemento.id}`} />
                })}
            </div>
        </>
      )

}