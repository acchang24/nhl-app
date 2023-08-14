import useLeagueStandings from "../hooks/useLeagueStandings";
import StandingsTable from "./StandingsTable";

// Selected year as props
interface Props {
  year: string;
}

// Component that returns a table of team standings sorted by league
const LeagueStandings = ({ year }: Props) => {
  // Fetch league standings
  const { data } = useLeagueStandings(year);

  return <StandingsTable type="league" standings={data}></StandingsTable>;
};

export default LeagueStandings;
