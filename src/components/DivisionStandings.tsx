import { Link } from "react-router-dom";
import { DivisionRecord } from "../interfaces/DivisionRecord";

interface Props {
  standings: DivisionRecord[];
}

const DivisionStandings = ({ standings }: Props) => {
  return (
    <>
      {standings?.map((division) => (
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
    </>
  );
};

export default DivisionStandings;
