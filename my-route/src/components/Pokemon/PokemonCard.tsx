import { CiHeart } from "react-icons/ci";
import { LuSwords } from "react-icons/lu";
import { PiShieldCheckeredLight } from "react-icons/pi";
import { PiBootLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  ColorPokemon,
  rawData,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";

const PokemonCard = ({ pokemonData }: { pokemonData: rawData | undefined }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 p-4 bg-black ">
        {pokemonData &&
          pokemonData.data.data.map((pokemon, index) => (
            <Link to={`/pokemondetail/${pokemon.no}`}>
              <div
                key={pokemon.no}
                className="bg-gray-700 bg-opacity-55  border border-gray-300 rounded-lg p-4 shadow-md"
              >
                <div className="bg-white">
                  <img
                    width={"50%"}
                    className="mx-auto"
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
                    alt={`img-${index}`}
                  />

                  <div className=" absolute ">
                    <div className="">
                      {pokemon.type.map((type) => (
                        <img
                          width={"30px"}
                          key={type}
                          style={{ backgroundColor: ColorPokemon[type] }}
                          className="p-2 border rounded-full "
                          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                          alt={`img-${index}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 ">
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
            </Link>
          ))}
      </div>
    </>
  );
};

export default PokemonCard;
