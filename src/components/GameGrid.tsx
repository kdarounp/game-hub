import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
      {game.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {game.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
