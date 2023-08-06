import { Link } from "react-router-dom";
import useDivisionStandings from "../hooks/useDivisionStandings";
import "./css/DivisionStandings.css";

// Returns a component containing tables that display team standings by division
const DivisionStandings = () => {
  // Fetch team standings sorted by division
  const { data: standings } = useDivisionStandings();

  return (
    <>
      {standings?.map((division) => (
        <div className="standings-table" key={division.division.id}>
          <table>
            <thead>
              <tr>
                <th>{division.division.name}</th>
                <th>Rank</th>
                <th>Games Played</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>OT</th>
                <th>Points</th>
                <th>Points %</th>
                <th>Regulation Wins</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Goal Differential</th>
              </tr>
            </thead>
            <tbody>
              {division?.teamRecords.map((t) => (
                <tr key={t.team.id}>
                  <td>
                    {
                      <Link to={`/teams/${t.team.id}`}>
                        <div className="team-link">
                          <img
                            className="team-logo-small"
                            src={`/images/${t.team.id}.png`}
                            alt=""
                          />
                          {t.team.name}
                        </div>
                      </Link>
                    }
                  </td>
                  <td>{t.divisionRank}</td>
                  <td>{t.gamesPlayed}</td>
                  <td>{t.leagueRecord.wins}</td>
                  <td>{t.leagueRecord.losses}</td>
                  <td>{t.leagueRecord.ot}</td>
                  <td>{t.points}</td>
                  <td>{t.pointsPercentage.toFixed(3)}</td>
                  <td>{t.regulationWins}</td>
                  <td>{t.goalsScored}</td>
                  <td>{t.goalsAgainst}</td>
                  <td>{t.goalsScored - t.goalsAgainst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default DivisionStandings;
