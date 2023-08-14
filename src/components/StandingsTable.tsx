import { Link } from "react-router-dom";
import { DivisionRecord, TeamRecord } from "../interfaces/DivisionRecord";
import "./css/StandingsTable.css";

interface Props {
  type: string;
  standings: DivisionRecord[];
}

function getKey(type: string, division: DivisionRecord) {
  switch (type) {
    case "division":
      return division.division.id;
    case "wildCard":
      return division.conference.id;
    case "conference":
      return division.conference.id;
    case "league":
      return division.league.id;
  }
}

function getTitle(type: string, division: DivisionRecord) {
  switch (type) {
    case "division":
      return division.division.name;
    case "wildCard":
      return "Wild Card";
    case "conference":
      return division.conference.name;
    case "league":
      return division.league.name;
  }
}

function getRanking(type: string, record: TeamRecord) {
  switch (type) {
    case "division":
      return record.divisionRank;
    case "wildCard":
      return record.wildCardRank;
    case "conference":
      return record.conferenceRank;
    case "league":
      return record.leagueRank;
  }
}

const StandingsTable = ({ type, standings }: Props) => {
  return (
    <>
      {standings?.map((division) => (
        <div className="standings-table" key={getKey(type, division)}>
          <table>
            <thead>
              <tr>
                <th>{getTitle(type, division)}</th>
                <th title="Rank">Rank</th>
                <th title="Games Played">GP</th>
                <th title="Wins">W</th>
                <th title="Losses">L</th>
                <th title="Overtime/Shootout Losses">OT</th>
                <th title="Points">PTS</th>
                <th title="Points Percentage">P%</th>
                <th title="Goals For">GF</th>
                <th title="Goals Against">GA</th>
                <th title="Goal Differential">DIFF</th>
              </tr>
            </thead>
            <tbody>
              {division?.teamRecords.map((r) => (
                <tr key={r.team.id}>
                  <td>
                    {
                      <div className="team-link-container">
                        <Link className="team-link" to={`/teams/${r.team.id}`}>
                          <img
                            className="team-logo-small"
                            src={`/images/${r.team.id}.png`}
                            alt=""
                          />
                          {r.team.name}
                        </Link>
                      </div>
                    }
                  </td>
                  <td>{getRanking(type, r)}</td>
                  <td>{r.gamesPlayed}</td>
                  <td>{r.leagueRecord.wins}</td>
                  <td>{r.leagueRecord.losses}</td>
                  <td>{r.leagueRecord.ot}</td>
                  <td>{r.points}</td>
                  <td>{r.pointsPercentage.toFixed(3)}</td>
                  <td>{r.goalsScored}</td>
                  <td>{r.goalsAgainst}</td>
                  <td
                    className={
                      r.goalsScored - r.goalsAgainst >= 0
                        ? "diff-positive"
                        : "diff-negative"
                    }
                  >
                    {r.goalsScored - r.goalsAgainst >= 0
                      ? `+${r.goalsScored - r.goalsAgainst}`
                      : r.goalsScored - r.goalsAgainst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default StandingsTable;
