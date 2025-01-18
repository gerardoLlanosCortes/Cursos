
import { SimplePokemon } from "@/pokemons";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: Props) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </>
  );
}
