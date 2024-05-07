import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PokemonLogo from "@images/International_Pokémon_logo 1.png";
import { useGetPokemonQuery } from "@services/pokemonService";
import { IoIosArrowForward } from "react-icons/io";
import LoadingDetail from "./LoadingDetail";
import {
  ColorPokemon,
  TypePokemon,
  TypeMove,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";
import PokemonEvolution from "./PokemonEvolution";
import { motion, AnimatePresence } from "framer-motion";
import PokemonNotfound from "./PokemonNotfound";

const PokemonDetail = () => {
  const { no } = useParams();
  const { data, isLoading } = useGetPokemonQuery(no);

  const Pokemon = data?.data.data[0];
  console.log(Pokemon);

  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingDetail />;
  }

  if (!Pokemon?.no) {
    return <div><PokemonNotfound/></div>;
  }

  function progressBar(stat: number | undefined) {
    if (stat === undefined) {
      console.error("Stat is undefined. Cannot calculate progress bar.");
      return 0; // or any default value you prefer
    }

    let width = (stat / 155) * 100;

    return width;
  }

  return (
    <div className="h-screen w-full">
      <div
        className=" flex items-center"
        style={{
          backgroundColor: ColorPokemon[Pokemon?.type[0] as TypePokemon],
          boxShadow: `0px 2px 20px ${
            ColorPokemon[Pokemon?.type[0] as TypePokemon]
          }`,
        }}
      >
        <Link
          to={`/pokemonhome`}
          className="flex items-center border rounded-full p-2 m-3 bg-white"
        >
          <IoIosArrowBack />
        </Link>
        <div className="border-none flex items-center rounded-md bg-gray-950/30 p-[4px] px-2">
          <div>
            <img width={"100px"} src={PokemonLogo} alt="logo" />
          </div>
          <div>
            <h1
              className="ml-2 font-extrabold text-[1.5rem] text-white drop-shadow-md"
              style={{
                textShadow: "4px 3px 0px #2980B9,-1px -1px 0px #F4D03F",
              }}
            >
              DEX
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center content-center mt-4 ">
          <div className="text-3xl font-medium text-gray-400 uppercase ">
            {Pokemon?.name}
          </div>
          <div
            className="mt-4 p-2  rounded-lg   text-white  "
            style={{
              backgroundColor: ColorPokemon[Pokemon?.type[0] as TypePokemon],
              boxShadow: `0px 2px 20px ${
                ColorPokemon[Pokemon?.type[0] as TypePokemon]
              }`,
            }}
          >
            {Pokemon?.species
              ? `${Pokemon?.species
                  .charAt(0)
                  .toUpperCase()}${Pokemon?.species.slice(1)} Pokemon`
              : `#${Pokemon?.no}`}
          </div>
        </div>

        <div className="flex mt-4 justify-between">
          <div className="flex items-center  p-2 m-3">
            <div className="border rounded-full bg-white p-3 ">
              {no && parseInt(no, 10) > 1 && (
                <IoIosArrowBack
                  onClick={() =>
                    navigate(
                      `/pokemondetail/${String(parseInt(no, 10) - 1).padStart(
                        3,
                        "0"
                      )}`
                    )
                  }
                />
              )}
            </div>
          </div>

          <div className="flex mt-4 justify-between">
            <div className=" perspective-400  ml-5 ">
              {/* perspective-400 */}
              <div className="transform rotate-y-30  rounded-lg p-5 w-[350px] ">
                <h1 className="font-bold text-2xl">INFO.</h1>
                <p className="text-left">No. {Pokemon?.no}</p>
                <p className="text-left">Name {Pokemon?.name}</p>
                <p className="text-left">Species {Pokemon?.species}</p>

                <div className="flex">
                  <p>Type</p>
                  {Pokemon?.type.map((type, index) => (
                    <div className="flex items-center" key={index}>
                      <img
                        width={"28px"}
                        style={{
                          backgroundColor: ColorPokemon[type],
                          boxShadow: `0px 2px 20px ${ColorPokemon[type]}`,
                        }}
                        className="p-[5px] mb-[5px] rounded-full"
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                        alt={`img-${index}`}
                      />
                      <p style={{ color: ColorPokemon[type] }}>{type}</p>
                    </div>
                  ))}
                </div>

                <p className="text-left">Abilities</p>
                <div className="flex flex-row flex-wrap">
                  {Pokemon?.moves.byLevelUp.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        width={"30px"}
                        className="p-[5px] mb-[5px] rounded-full"
                        style={{
                          backgroundColor:
                            ColorPokemon[item.type as unknown as TypePokemon],
                          boxShadow: `0px 2px 20px ${
                            ColorPokemon[item.type as unknown as TypePokemon]
                          }`,
                        }}
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.type}.png`}
                        alt={`img-${index}`}
                      />
                      <p
                        style={{
                          color:
                            ColorPokemon[item.type as unknown as TypePokemon],
                          textShadow: `0px 2px 20px ${
                            ColorPokemon[item.type as unknown as TypePokemon]
                          }`,
                        }}
                      >
                        {item.move}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <motion.img
                initial={{ y: -10 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                width={"350px"}
                className="mx-auto relative top-5 drop-shadow-md"
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${Pokemon?.no}.png`}
                alt={`img-${Pokemon?.name}`}
              />
            </div>

            <div className=" perspective-400  mr-5 font-kanit">
              <div className=" transform -rotate-y-30 w-[350px] rounded-lg ">
                <h1 className="font-bold text-2xl ml-32">STATS</h1>
                <div className="flex justify-center items-center">
                  <div
                    className="grid grid-cols-1 ml-32 justify-items-center w-[75px] h-[75px] rounded-full"
                    style={{
                      backgroundColor:
                        ColorPokemon[Pokemon?.type[0] as TypePokemon],
                      color: "white",
                      boxShadow: `0px 2px 20px ${
                        ColorPokemon[Pokemon?.type[0] as TypePokemon]
                      }`,
                    }}
                  >
                    <p className="text-[18px]">Power {Pokemon?.stats.total}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 justify-items-end">
                  <div className="flex items-center">
                    <p>Hp</p>
                    <div
                      className="flex w-[155px] h-2 bg-gray-300 rounded-full overflow-hidden "
                      aria-valuenow={Pokemon?.stats.hp}
                      aria-valuemin={0}
                      aria-valuemax={155}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600   "
                        style={{ width: `${progressBar(Pokemon?.stats.hp)}%` }}
                      ></div>
                    </div>
                    <p>{Pokemon?.stats.hp}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Attack</p>
                    <div
                      className="flex w-[155px] h-2 bg-gray-300 rounded-full overflow-hidden "
                      aria-valuenow={Pokemon?.stats.attack}
                      aria-valuemin={0}
                      aria-valuemax={155}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-red-400   "
                        style={{
                          width: `${progressBar(Pokemon?.stats.attack)}%`,
                        }}
                      ></div>
                    </div>
                    <p>{Pokemon?.stats.attack}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Defense</p>
                    <div
                      className="flex w-[155px] h-2 bg-gray-300 rounded-full overflow-hidden "
                      aria-valuenow={Pokemon?.stats.defense}
                      aria-valuemin={0}
                      aria-valuemax={155}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400   "
                        style={{
                          width: `${progressBar(Pokemon?.stats.defense)}%`,
                        }}
                      ></div>
                    </div>
                    <p>{Pokemon?.stats.defense}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Speed</p>
                    <div
                      className="flex w-[155px] h-2 bg-gray-300 rounded-full overflow-hidden "
                      aria-valuenow={Pokemon?.stats.speed}
                      aria-valuemin={0}
                      aria-valuemax={155}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-cyan-400   "
                        style={{
                          width: `${progressBar(Pokemon?.stats.speed)}%`,
                        }}
                      ></div>
                    </div>
                    <p>{Pokemon?.stats.speed}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Special</p>
                    <div
                      className="flex w-[155px] h-2 bg-gray-300 rounded-full overflow-hidden "
                      aria-valuenow={Pokemon?.stats.special}
                      aria-valuemin={0}
                      aria-valuemax={155}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-pink-200   "
                        style={{
                          width: `${progressBar(Pokemon?.stats.special)}%`,
                        }}
                      ></div>
                    </div>
                    <p>{Pokemon?.stats.special}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center  rounded-full p-2 m-3 ">
            <div className="border rounded-full bg-white p-3">
              {no && parseInt(no, 10) >= 1 && (
                <IoIosArrowForward
                  onClick={() =>
                    navigate(
                      `/pokemondetail/${String(parseInt(no, 10) + 1).padStart(
                        3,
                        "0"
                      )}`
                    )
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center content-center items-center mt-10 ">
          <PokemonEvolution data={data} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
