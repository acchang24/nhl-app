import { Link } from "react-router-dom";
import useStandings from "../hooks/useStandings";

const StandingsPage = () => {
  const { data: leagueStandings } = useStandings();

  return (
    <div>
      {leagueStandings?.map((division) => (
        <div key={division.division.id}>
          <h2>{division.division.name}</h2>
          <ul className="list">
            {division?.teamRecords.map((t) => (
              <li key={t.team.id}>
                <Link to={`/teams/${t.team.id}`}>{t.team.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StandingsPage;
