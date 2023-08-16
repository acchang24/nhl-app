import { Link } from "react-router-dom";
import { TeamRecord } from "../interfaces/DivisionRecord";
import "./css/TeamCard.css";

interface Props {
  record: TeamRecord;
}

const TeamCard = ({ record }: Props) => {
  console.log(record);

  return (
    <div className="team-card">
      <div className="col-left">
        <Link className="team-card-link" to={`/teams/${record.team.id}`}>
          <img
            className="team-logo-medium team-card-logo"
            src={`/images/${record.team.id}.png`}
            alt="logo"
          />
          {record.team.name}
        </Link>
      </div>
      <div className="col-right">
        <button className="btn">Roster</button>
      </div>
    </div>
  );
};

export default TeamCard;
