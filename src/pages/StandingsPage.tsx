import { Link } from "react-router-dom";
import useStandings from "../hooks/useStandings";
import { DivisionRecord } from "../interfaces/DivisionRecord";

function formatDivisionStandings(standings: DivisionRecord) {
  console.log(standings);
}

const StandingsPage = () => {
  // Fetch team standings
  const { data: leagueStandings } = useStandings();

  // Check if leagueStandings not null and format
  if (leagueStandings) {
    formatDivisionStandings(leagueStandings![0]);
  }

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
