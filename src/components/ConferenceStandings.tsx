import useConferenceStandings from "../hooks/useConferenceStandings";
import StandingsTable from "./StandingsTable";

// Component that returns tables containing team standings sorted by conference
const ConferenceStandings = () => {
  // Fetch standings by conference
  const { data } = useConferenceStandings();

  return <StandingsTable type="conference" standings={data}></StandingsTable>;
};

export default ConferenceStandings;
