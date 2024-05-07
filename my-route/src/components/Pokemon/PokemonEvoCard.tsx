import React from "react";
import { useGetPokemonQuery } from "@services/pokemonService";
import { FaArrowRight } from "react-icons/fa6";
import {
  ColorPokemon,
  TypePokemon,
} from "@services/PokemonService/PokemonResponse/pokemonResponse";

function PokemonEvoCard({
  no,
  method,
}: {
  no: string | undefined;
  method: string | undefined;
}) {
  const { data, isLoading } = useGetPokemonQuery(no);
  const Pokemon = data?.data.data[0];

  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex content-center justify-center items-center ">
            {method && (
              <div className="flex flex-col justify-center items-center ">
                <p>{method}</p>
                <FaArrowRight />
              </div>
            )}
            <div
              className="border  rounded-lg p-4 my-4"
              style={{
                width: "200px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
              }}
            >
              <img
                width={"40%"}
                className="mx-auto"
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${Pokemon?.no}.png`}
                alt={Pokemon?.name}
              />

              <p className="text-center mt-2">#{Pokemon?.no}</p>
              <p
                className="text-center mt-2 rounded-md capitalize flex justify-center content-center items-center mx-6 p-1 text-white"
                style={{
                  backgroundColor:
                    ColorPokemon[Pokemon?.type[0] as unknown as TypePokemon],
                    boxShadow: `0px 1px 20px ${ColorPokemon[Pokemon?.type[0] as unknown as TypePokemon]}`,
                }}
              >
                {Pokemon?.species}
              </p>
              <div className="flex justify-center mt-2">
                {Pokemon?.type.map((type) => (
                  <img
                    key={type}
                    width={"28px"}
                    style={{
                      backgroundColor: ColorPokemon[type],
                      boxShadow: `0px 4px 20px ${ColorPokemon[type]}`,
                    }}
                    className="p-[5px] mb-[5px] rounded-full m-1"
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                    alt={type}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default PokemonEvoCard;
