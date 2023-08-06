import { Link } from "react-router-dom";
import useDivisionStandings from "../hooks/useDivisionStandings";

const TeamsPage = () => {
  const { data: leagueStandings } = useDivisionStandings();

  return (
    <div>
      {leagueStandings?.map((division) => (
        <div key={division.division.id}>
          <h2>{division.division.name}</h2>
          <ul className="list">
            {division?.teamRecords.map((t) => (
              <li key={t.team.id}>
                <Link to={`/teams/${t.team.id}`}>
                  <img
                    className="team-logo-small"
                    src={`/images/${t.team.id}.png`}
                    alt="logo"
                  />
                  {t.team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamsPage;
