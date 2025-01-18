import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";
import { notFound } from "next/navigation";


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}
