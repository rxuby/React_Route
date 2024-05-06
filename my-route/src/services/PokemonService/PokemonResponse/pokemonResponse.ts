export const ColorPokemon = {
    bug: "#729F3F",
    dragon: "rgb(241,110,87)",
    fire: "rgb(253,125,36)",
    ghost: "rgb(123,98,163)",
    ground: "rgb(171,152,66)",
    normal: "rgb(164,172,175)",
    psychic: "rgb(243,102,185)",
    electric: "rgb(238,213,53)",
    fighting: "rgb(213,103,35)",
    flying: "rgb(157,225,244)",
    grass: "rgb(155,204,80)",
    ice: "rgb(81,196,231)",
    poison: "rgb(185,127,201)",
    rock: "rgb(123,103,14)",
    water: "rgb(69,146,196)",
  };
  
export type TypePokemon = keyof typeof ColorPokemon;

export type PokemonDetail = {
    no: string;
  name: string;
  species: string;
  type: TypePokemon[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
  };
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
}[]

export type rawData = {
    status: string;
    results: number;
    data: {
        data: PokemonDetail;
    }
}