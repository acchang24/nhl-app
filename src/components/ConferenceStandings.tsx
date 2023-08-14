import useConferenceStandings from "../hooks/useConferenceStandings";
import StandingsTable from "./StandingsTable";

// Selected year as props
interface Props {
  year: string;
}

// Component that returns tables containing team standings sorted by conference
const ConferenceStandings = ({ year }: Props) => {
  // Fetch standings by conference
  const { data } = useConferenceStandings(year);

  return <StandingsTable type="conference" standings={data}></StandingsTable>;
};

export default ConferenceStandings;
