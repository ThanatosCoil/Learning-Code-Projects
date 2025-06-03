interface MoviesInfoProps {
  movies: {
    movieTitle: string;
    moviePrice: number;
    movieDescription: string;
    movieRating: number;
  };
}

const MoviesInfo = ({ movies }: MoviesInfoProps) => {
  const { movieTitle, moviePrice, movieDescription, movieRating } = movies;
  return (
    <>
      <h1>{movieTitle}</h1>
      <p>Price: {moviePrice}</p>
      <p>Description: {movieDescription}</p>
      <p>Rating: {movieRating}</p>
      <hr className="w-80 h-1 my-4 bg-gray-100 border-0 rounded-sm md:my-5 dark:bg-gray-700" />
    </>
  );
};
export default MoviesInfo;
