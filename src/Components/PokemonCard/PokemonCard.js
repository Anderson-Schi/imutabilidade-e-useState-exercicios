import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'



const PokemonCard = ({ pokemon, setPokemon, setPokemon2 } ) => {
  // const PokemonCard = ({ pokemon } ) =>
  // const {image, evolved, color, type, name, weight, pokemon, pokemon2} = props
  const {image, color, type, name, weight} = pokemon

  const evoluirPokemon = () => {
    if(name === 'Pichu'){
      const pokemon1Evolved = {
        ...pokemon,
        name: 'Pikachu',
        weight: 6.0,
        evolved: true,
        image: 'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png'
      };
      setPokemon(pokemon1Evolved);

    }else if(name === 'Bulbasaur'){
      const pokemon2Evolved = {
        ...pokemon,
        name: 'Ivysaur',
        weight: 13,
        evolved: true,
        image: 'https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png'
      };
      setPokemon(pokemon2Evolved)
    }
  };


  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>Type:{type}</PokemonType>
      <p>{weight}Kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>

  )

}

export default PokemonCard

