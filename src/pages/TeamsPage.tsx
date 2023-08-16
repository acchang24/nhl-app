import useDivisionStandings from "../hooks/useDivisionStandings";
import TeamCard from "../components/TeamCard";
import "./css/TeamsPage.css";

const TeamsPage = () => {
  const { data: leagueStandings } = useDivisionStandings("");

  return (
    <div>
      {leagueStandings?.map((division) => (
        <div className="team-page" key={division.division.id}>
          <h2>{division.division.name}</h2>
          {division?.teamRecords.map((t) => (
            <TeamCard record={t} key={t.team.id}></TeamCard>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeamsPage;
