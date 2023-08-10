import useDivisionStandings from "../hooks/useDivisionStandings";
import StandingsTable from "./StandingsTable";

// Selected year as props
interface Props {
  year: string;
}

// Returns a component containing tables that display team standings by division
const DivisionStandings = ({ year }: Props) => {
  // Fetch team standings sorted by division
  const { data: standings } = useDivisionStandings(year);

  return (
    <StandingsTable type="division" standings={standings!}></StandingsTable>
  );
};

export default DivisionStandings;
