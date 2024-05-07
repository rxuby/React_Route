import { useGetPokemonsQuery } from "@services/pokemonService";
import PokemonCard from "./PokemonCard";
import {
  ColorPokemon,
  TypePokemon,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";
import { Link, useSearchParams } from "react-router-dom";
import PokemonLogo from "@images/International_Pokémon_logo 1.png";
import LoadingHome from "./LoadingHome";
import { motion } from "framer-motion";
import { useState } from "react";

function PokemonHome() {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "");
  const [all, setAll] = useState();
  const { data, isLoading, isFetching } = useGetPokemonsQuery(
    searchParams.get("type") || undefined
  );

  const availableTypes = Object.keys(ColorPokemon) as TypePokemon[];

  return (
    <div className="bg-white h-screen ">
      <div
        className="rounded-b-full pb-10 bg-red-600"
        // bg-gradient-to-r from-black from-1%   via-white via-50% to-black to-99%
        style={{ borderRadius: "0 0 100% 100%" }}
      >
        <div className="flex justify-center items-center pt-6">
          <img width={"8%"} src={PokemonLogo} alt="logo" />
        </div>
        <h1
          className="text-4xl font-extrabold text-white"
          style={{ textShadow: "4px 3px 0px #2980B9,-4px -4px 0px #F4D03F" }}
        >
          DEX
        </h1>
      </div>
      <div className="flex justify-center items-center pt-6">
        <div className="grid grid-cols-8 gap-2 w-[800px] content-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[75px] h-[75px] rounded-full grid grid-cols-1 content-center justify-center"
          >
            <Link
              to={`/pokemonhome`}
              onClick={() => setType("")}
              className="w-[75px] h-[75px] rounded-full grid grid-cols-1 content-center justify-center border-2 border-slate-300 text-slate-300"
              style={{
                display: "inline-block",
                marginRight: "10px",
                textDecoration: "none",
                transition: "background-color 0.3s",
                textTransform: "uppercase",
                backgroundColor: "" === type ?  "#cbd5e1" : "transparent",
                color: ("" === type) ? "white" : "",
              }}
            >
              <span className="justify-self-center text-sm font-kanit">
                All
              </span>
            </Link>
          </motion.div>
          {availableTypes.map((item, index) => (
            <Link
              key={index}
              to={`/pokemonhome?type=${item}`}
              className={``}
              onClick={() => setType(item)}
              style={{
                display: "inline-block",
                marginRight: "10px",
                textDecoration: "none",
                color: "white",
                transition: "background-color 0.3s",
                textTransform: "uppercase",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[75px] h-[75px] rounded-full grid grid-cols-1 content-center justify-center border-2"
                style={{
                  backgroundColor: item === type ? ColorPokemon[item] : "",
                  borderColor: ColorPokemon[item],
                  color: !(item === type) ? ColorPokemon[item] : "",
                }}
              >
                <img
                  className="absolute rounded-full p-1"
                  style={{ backgroundColor: ColorPokemon[item] }}
                  width={"30px"}
                  height={"30px"}
                  key={item}
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item}.png`}
                  alt={`img-${index}`}
                />
                <span className="justify-self-center text-sm font-kanit">
                  {item}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {isFetching ? <LoadingHome /> : <PokemonCard pokemonData={data} />}
      </div>
    </div>
  );
}

export default PokemonHome;
