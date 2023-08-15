import GameCard from "../components/GameCard";
import useGamesToday from "../hooks/useGamesToday";
import { Game } from "../interfaces/Schedule";

const GamesPage = () => {
  // Calls useGamesToday hook to fetch games
  const { data, error } = useGamesToday();

  if (data) {
    const gamesToday: Game[] = data[0].games;
    // console.log(gamesToday);
    return (
      <div className="container">
        <h1>Games Today</h1>
        {error && error.message}
        {gamesToday?.map((g: Game) => (
          <GameCard key={g.gamePk} game={g}></GameCard>
        ))}
      </div>
    );
  }

  return <></>;
};

export default GamesPage;
