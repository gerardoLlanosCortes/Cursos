import FavoritesPokemons from "@/pokemons/components/FavoritesPokemons";

export default function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <FavoritesPokemons />
      </div>
    </div>
  );
}

