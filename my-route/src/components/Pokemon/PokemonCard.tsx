import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { LuSwords } from "react-icons/lu";
import { PiShieldCheckeredLight } from "react-icons/pi";
import { PiBootLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import {
  ColorPokemon,
  rawData,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";

const PokemonCard = ({ pokemonData }: { pokemonData: rawData | undefined }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 bg-white">
        {pokemonData &&
          pokemonData.data.data.map((pokemon, index) => (
            <Link to={`/pokemondetail/${pokemon.no}`} key={pokemon.no}>
              <div className="relative">
                <div className="bg-red-600 border-none rounded-xl p-4 shadow-md ">
                  <div className="bg-white/20 rounded-xl  ">
                    <img
                      width={"80%"}
                      className="mx-auto relative top-6"
                      src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
                      alt={`img-${index}`}
                    />

                    <div className="absolute top-6 right-6">
                      <div className="border-none p-[6px] rounded-md bg-black/20">
                        {pokemon.type.map((type) => (
                          <img
                            width={"28px"}
                            key={type}
                            style={{ backgroundColor: ColorPokemon[type] }}
                            className="p-[5px] mt-[3px] mb-[3px] rounded-full"
                            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                            alt={`img-${index}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex flex-col items-center justify-center gap-0 w-full rounded-xl bg-white pb-2">
                        <div className="border rounded-md p-[2px] px-3 mt-3 font-bold bg-black/20 text-white uppercase mb-2">
                          <h1 className=" text-grey-600">{pokemon.name}</h1>
                        </div>
                        <div className="flex flex-row  ">
                          <p className="grid mx-[5px]">
                            <CiHeart className="justify-self-center" />
                            <span className="justify-self-center">
                              {pokemon.stats.hp}
                            </span>
                          </p>
                          <p className="grid mx-[5px]">
                            <LuSwords className="justify-self-center" />
                            <span className="justify-self-center">
                              {pokemon.stats.attack}
                            </span>
                          </p>
                          <p className="grid mx-[5px]">
                            <PiShieldCheckeredLight className="justify-self-center" />
                            <span className="justify-self-center">
                              {pokemon.stats.defense}
                            </span>
                          </p>
                          <p className="grid mx-[5px]">
                            <PiBootLight className="justify-self-center" />
                            <span className="justify-self-center">
                              {pokemon.stats.speed}
                            </span>
                          </p>
                          <p className="grid mx-[5px]">
                            <CiStar className="justify-self-center" />
                            <span className="justify-self-center">
                              {pokemon.stats.special}
                            </span>
                          </p>
                          <p className="grid mx-[5px]">
                            <AiOutlineFire className="justify-self-center" />

                            <span className="justify-self-center">
                              {pokemon.stats.total}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PokemonCard;
