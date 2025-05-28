interface GamesInfoProps {
  games: {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
  };
}

const GamesInfo = ({ games }: GamesInfoProps) => {
  const { gameName, gameRating, gameGenre, gameLanguages } = games;
  return (
    <>
      <h1>Game Name: {gameName}</h1>
      <p>Game Rating: {gameRating}</p>
      <p>Game Genre: {gameGenre}</p>
      <br />
      <ul>
        Languages:
        {gameLanguages.map((l: string) => (
          <li>{l}</li>
        ))}
      </ul>
      <hr className="w-80 h-1 my-4 bg-gray-100 border-0 rounded-sm md:my-5 dark:bg-gray-700" />
      <p>Game </p>
    </>
  );
};
export default GamesInfo;
