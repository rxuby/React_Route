import axios from "axios";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuSwords } from "react-icons/lu";
import { PiShieldCheckeredLight } from "react-icons/pi";
import { PiBootLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

type Type = {
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
};

const ColorPokemon = {
  bug: "#729F3F",
  dargon: "rgb(241,110,87)",
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

type TypePokemon = keyof typeof ColorPokemon;

const PokemonFetch = () => {
  const [data, setData] = useState<Type[]>();

  const [type, setType] = useState<TypePokemon | "">("");

  //   const fetchDataAxios = async (sort: string) => {
  const fetchData = async () => {
    // const result = await axios.get(
    //   "https://pokemon-api.cyclic.app/api/v1/pokemon"
    // );
    // const _result = result.data.data.data;
    // setData(_result);
    let url = "https://pokemon-api.cyclic.app/api/v1/pokemon";

    let params = new URLSearchParams({
      type,
    });

    try {
      if (type) {
        url = url + "?" + params.toString();
      }
      const response = await axios.get(url);

      setData(response.data.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchDataAxios();
  }, [type]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 p-4 bg-black">
        {data &&
          data.map((pokemon, index) => (
            <div
              key={pokemon.no}
              className="bg-gray-700 bg-opacity-55  border border-gray-300 rounded-lg p-4 shadow-md"
            >
              <div>
                <img
                  width={"50%"}
                  className="mx-auto"
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
                  alt={`img-${index}`}
                />
                <div className="mt-4 ">
                    
                  <div className=" relative w-full  ">
                    <div className="border">
                    {pokemon.type.map((type) => ( 
                      <img
                      width={"10%"}
                        key={type}
                        style={{ backgroundColor: ColorPokemon[type] }}
                        className="p-2 border rounded-full "
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                        alt={`img-${index}`}
                      />
                    ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0 w-full pt-12 bg-white">
                    <div>
                      <h1>{pokemon.name}</h1>
                    </div>
                    <div className="flex flex-row">
                      <p>
                        <CiHeart />
                        {pokemon.stats.hp}
                      </p>
                      <p>
                        <LuSwords />
                        {pokemon.stats.attack}
                      </p>
                      <p>
                        <PiShieldCheckeredLight />

                        {pokemon.stats.defense}
                      </p>
                      <p>
                        <PiBootLight />
                        {pokemon.stats.speed}
                      </p>
                      <p>
                        <CiStar />
                        {pokemon.stats.special}
                      </p>
                      <p>
                        <AiOutlineFire />
                        {pokemon.stats.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PokemonFetch;
