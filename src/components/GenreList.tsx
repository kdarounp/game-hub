import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
