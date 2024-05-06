import { useGetPokemonsQuery } from "@services/pokemonService";
import PokemonCard from "./PokemonCard";
import {
  ColorPokemon,
  TypePokemon,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";
import { Link, useSearchParams } from "react-router-dom";
import PokemonLogo from "@images/International_Pokémon_logo 1.png";
import LoadingHome from "./LoadingHome";

function PokemonHome() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useGetPokemonsQuery(
    searchParams.get("type") || undefined
  );

  const availableTypes = Object.keys(ColorPokemon) as TypePokemon[];

  return (
    <div className="bg-black h-screen">
      <div
        className="rounded-b-full pb-10 bg-gradient-to-r from-black from-1%   via-white via-50% to-black to-99%"
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

        <div className="links-container">
          <Link
            to={`/pokemonhome`}
            style={{
              display: "inline-block",
              padding: "10px 15px",
              marginRight: "10px",
              borderRadius: "100%",
              textDecoration: "none",
              color: "white",
              backgroundColor: "#F4D03F",
              transition: "background-color 0.3s",
              // transform: "skew(-20deg)",
            }}
          >
            All
          </Link>
          {availableTypes.map((item, index) => (
            <Link
              key={index}
              to={`/pokemonhome?type=${item}`}
              className="pokemon-link"
              style={{
                display: "inline-block",
                padding: "10px 15px",
                marginRight: "10px",
                borderRadius: "100%",
                textDecoration: "none",
                color: "white",
                backgroundColor: ColorPokemon[item],
                transition: "background-color 0.3s",
                // transform: "skew(-20deg)",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {isLoading ? (
        <LoadingHome />
      ) : (
        <PokemonCard pokemonData={data} />
      )}
    </div>
  );
}

export default PokemonHome;
