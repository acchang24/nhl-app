import useStandings from "../hooks/useStandings";

const StandingsPage = () => {
  const { data: leagueStandings } = useStandings();

  return (
    <div>
      {leagueStandings?.map((division) => (
        <ul key={division.division.id}>
          {division?.teamRecords.map((t) => (
            <li key={t.team.id}>{t.team.name}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default StandingsPage;
