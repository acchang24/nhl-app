import { useState } from "react";
import useStandings from "../hooks/useStandings";
import DivisionStandings from "../components/DivisionStandings";
import { DivisionRecord } from "../interfaces/DivisionRecord";

// function formatDivisionStandings(standings: DivisionRecord) {
//   console.log(standings);
// }

function renderStandings(sort: string, standings: DivisionRecord[]) {
  switch (sort) {
    case "Division":
      return <DivisionStandings standings={standings}></DivisionStandings>;
    case "Wildcard":
      return <>Wildcard</>;
    case "Conference":
      return <>Conference</>;
    case "League":
      return <>League</>;
  }
}

const StandingsPage = () => {
  // Fetch team standings
  const { data: standings } = useStandings();

  // State to keep track of how to sort the standings
  const [sort, setSort] = useState<string>("Division");

  return (
    <div>
      <select name="sort" onChange={(v) => setSort(v.target.value)}>
        <option value="Division">Division</option>
        <option value="Wildcard">Wildcard</option>
        <option value="Conference">Conference</option>
        <option value="League">League</option>
      </select>
      {renderStandings(sort, standings!)}
    </div>
  );
};

export default StandingsPage;
