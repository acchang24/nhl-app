import useWildCardStandings from "../hooks/useWildCardStandings";
import { DivisionRecord } from "../interfaces/DivisionRecord";
import StandingsTable from "./StandingsTable";

function getConferenceStandings(standings: DivisionRecord[]) {
  return (
    <StandingsTable type="division" standings={standings}></StandingsTable>
  );
}

function getWildCardStandings(standings: DivisionRecord[]) {
  return (
    <StandingsTable type="wildCard" standings={standings}></StandingsTable>
  );
}

const WildCardStandings = () => {
  // Fetch data sorted by wild card
  const { data } = useWildCardStandings();

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
      {getConferenceStandings(eastStandings!)}
      {getWildCardStandings(wildCardEast!)}
      {getConferenceStandings(westStandings!)}
      {getWildCardStandings(wildCardWest!)}
    </>
  );
};

export default WildCardStandings;
