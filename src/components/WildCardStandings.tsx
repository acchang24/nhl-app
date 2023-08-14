import useWildCardStandings from "../hooks/useWildCardStandings";
import { DivisionRecord } from "../interfaces/DivisionRecord";
import StandingsTable from "./StandingsTable";

// Selected year as props
interface Props {
  year: string;
}

function displayWildCardWithLeaders(data: DivisionRecord[]) {
  // Separate eastern conference standings
  const eastStandings = data?.slice(2, 4);
  // Separate western conference standings
  const westStandings = data?.slice(4, 6);

  // Separate eastern conference wildcard
  const wildCardEast = data?.slice(0, 1);
  // Separate western conference wildcard
  const wildCardWest = data?.slice(1, 2);

  return (
    <>
      <h2 className="standings-header ">Eastern Conference</h2>
      <StandingsTable
        type="division"
        standings={eastStandings!}
      ></StandingsTable>
      <StandingsTable
        type="wildCard"
        standings={wildCardEast!}
      ></StandingsTable>
      <h2 className="standings-header ">Western Conference</h2>
      <StandingsTable
        type="division"
        standings={westStandings!}
      ></StandingsTable>
      <StandingsTable
        type="wildCard"
        standings={wildCardWest!}
      ></StandingsTable>
    </>
  );
}

function displayNoLeaders(data: DivisionRecord[]) {
  return (
    <>
      <StandingsTable type="division" standings={data}></StandingsTable>
    </>
  );
}

const WildCardStandings = ({ year }: Props) => {
  // Fetch data sorted by wild card
  const { data } = useWildCardStandings(year);

  if (data && data.length > 0) {
    return (
      <>
        {data[0].standingsType === "divisionLeaders"
          ? displayNoLeaders(data)
          : displayWildCardWithLeaders(data)}
      </>
    );
  }
  return <></>;
};

export default WildCardStandings;
