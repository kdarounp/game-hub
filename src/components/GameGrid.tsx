import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { game, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
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
