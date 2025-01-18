"use client";
import { useEffect, useState } from "react";
import PokemonGrid from "../../pokemons/components/PokemonGrid";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export default function FavoritesPokemons() {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));

  const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(Object.values(favoritePokemons));
  // }, [favoritePokemons]);

  return (
    <>
      {favoritePokemons.length === 0 ? <NoFavorites /> : <PokemonGrid pokemons={favoritePokemons} />}
    </>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  );
};
