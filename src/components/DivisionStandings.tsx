import useDivisionStandings from "../hooks/useDivisionStandings";
import StandingsTable from "./StandingsTable";
import "./css/DivisionStandings.css";

// Returns a component containing tables that display team standings by division
const DivisionStandings = () => {
  // Fetch team standings sorted by division
  const { data: standings } = useDivisionStandings();

  return (
    <StandingsTable type="division" standings={standings!}></StandingsTable>
  );
};

export default DivisionStandings;
