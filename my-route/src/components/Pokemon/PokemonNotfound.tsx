import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PokemonLogo from "@images/International_Pokémon_logo 1.png";
import { useGetPokemonQuery } from "@services/pokemonService";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import PokeLoad from "@images/pokemon-transparent-24.png";

const PokemonNotfound = () => {
  const { no } = useParams();
  const { data } = useGetPokemonQuery(no);

  console.log(data);

  return (
    <div className="h-screen w-full">
      <div className="flex items-center">
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
            <h1 className="ml-2 font-extrabold text-[1.5rem] text-white drop-shadow-md">
              DEX
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center content-center items-center relative top-28 ">
        <img
          className="opacity-20"
          width={"15%"}
          src={PokeLoad}
          alt="Pikachu"
        />
        <h1 className="opacity-20">Not Found Pokemon!</h1>
      </div>
    </div>
  );
};

export default PokemonNotfound;
