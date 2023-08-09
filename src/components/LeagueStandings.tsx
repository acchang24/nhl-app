import useLeagueStandings from "../hooks/useLeagueStandings";
import StandingsTable from "./StandingsTable";

// Component that returns a table of team standings sorted by league
const LeagueStandings = () => {
  // Fetch league standings
  const { data } = useLeagueStandings();

  return <StandingsTable type="league" standings={data}></StandingsTable>;
};

export default LeagueStandings;
