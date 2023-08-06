import { Link } from "react-router-dom";
import useWildCardStandings from "../hooks/useWildCardStandings";
import { DivisionRecord } from "../interfaces/DivisionRecord";

function getConferenceStandings(standings: DivisionRecord[]) {
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
}

function getWildCardStandings(standings: DivisionRecord[]) {
  return (
    <>
      {standings?.map((conference) => (
        <div className="standings-table" key={conference.conference.id}>
          <table>
            <thead>
              <tr>
                <th>Wild Card</th>
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
              {conference?.teamRecords.map((t) => (
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
                  <td>{t.wildCardRank}</td>
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
}

const WildCardStandings = () => {
  // Fetch data sorted by wild card
  const { data } = useWildCardStandings();

  // Separate eastern conference standings
  const eastStandings = data?.slice(2, 4);
  // Separate western conference standings
  const westStandings = data?.slice(4, 6);

  // Separate eastern conference wildcard
  const wildCardEast = data?.slice(0, 1);
  // Separate western conference wildcard
  const wildCardWest = data?.slice(1, 2);

  return (
    <>
      {getConferenceStandings(eastStandings!)}
      {getWildCardStandings(wildCardEast!)}
      {getConferenceStandings(westStandings!)}
      {getWildCardStandings(wildCardWest!)}
    </>
  );
};

export default WildCardStandings;
