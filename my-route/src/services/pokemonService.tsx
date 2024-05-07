import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TypePokemon,
  rawData,
} from "./PokemonService/PokemonResponse/pokemonResponse";

const pokemonService = createApi({
  reducerPath: "pokemonService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemon-api.cyclic.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<rawData, string | null>({
      query: () => `pokemon`,
      transformResponse: (response: rawData, _, type: string | null) => ({
        ...response,
        data: {
          data: response.data.data.filter((pokemon) =>
            type ? pokemon.type.includes(type as TypePokemon) : true
          ),
        },
      }),
    }),
    getPokemon: builder.query<rawData, string | undefined>({
      query: (no) => `pokemon/${no}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonService;

export default pokemonService;
