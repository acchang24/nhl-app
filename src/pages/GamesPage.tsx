import useGamesToday from "../hooks/useGamesToday";

const GamesPage = () => {
  // Calls useGamesToday hook to fetch games
  const { data: gamesToday, error } = useGamesToday();

  return (
    <>
      {error && error.message}
      <ul className="list">
        {gamesToday?.games.map((g) => (
          <li key={g.gamePk}>
            <div>
              {g.venue.name}
              {g.teams.away.team.name + " at " + g.teams.home.team.name}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GamesPage;
