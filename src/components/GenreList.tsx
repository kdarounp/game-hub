import { useState } from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
