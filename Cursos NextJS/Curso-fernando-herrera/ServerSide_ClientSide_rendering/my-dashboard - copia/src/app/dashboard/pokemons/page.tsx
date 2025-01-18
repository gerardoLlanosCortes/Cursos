import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";
import { notFound } from "next/navigation";

const getPokemons = async (
  limit = 20,
  offest = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offest}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/").at(-2)!),
    name: pokemon.name,
  }));

  //   throw new Error("Esto es un error");
//   throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small className="text-blue-500">estático</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
