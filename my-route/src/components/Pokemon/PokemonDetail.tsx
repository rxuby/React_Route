import { useGetPokemonQuery } from "@services/pokemonService";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { no } = useParams();
  const { data } = useGetPokemonQuery(no);

  console.log(data);

  return (
    <div>


      <div>
        <div>
          <h1>Pokemon Name</h1>
        </div>
        <div>
          <h2>Species Pokemon</h2>
        </div>
      </div>

<div>
      <div className="border-4">
        <h1>Info</h1>
        <p>No.</p>
        <p>Name.</p>
        <p>Species</p>
        <p>Type</p>
        <p>Abilities</p>
      </div>

      <div>
        <img src="" alt="" /> imageeeeeeeee
      </div>

      <div>
        <h1>Stats</h1>
      </div>
      </div>

      <div>
        <div>Evolution Chain</div>
      </div>
    </div>
  );
};

export default PokemonDetail;
