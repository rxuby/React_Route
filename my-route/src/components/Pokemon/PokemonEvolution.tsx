import React from "react";
import PokemonEvoCard from "./PokemonEvoCard";
import {
  ColorPokemon,
  TypePokemon,
  rawData,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";

function PokemonEvolution({ data }: { data: rawData | undefined }) {
  const Pokemon = data?.data.data[0];
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1
            className="p-2 mb-3 border rounded-lg w-40 text-white"
            style={{
              backgroundColor: ColorPokemon[Pokemon?.type[0] as TypePokemon],
            }}
          >
            EVOLUTION CHAIN
          </h1>
        </div>
        <div className="flex justify-around ">
          {Pokemon?.evolution.map((item) => (
            <PokemonEvoCard no={item.no} method={item.method} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonEvolution;
