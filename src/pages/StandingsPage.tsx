import { useState } from "react";
import DivisionStandings from "../components/DivisionStandings";

// Renders the standings table based on state's sort
function renderStandings(sort: number) {
  switch (sort) {
    case 0:
      return <DivisionStandings></DivisionStandings>;
    case 1:
      return <>Wildcard</>;
    case 2:
      return <>Conference</>;
    case 3:
      return <>League</>;
  }
}

const StandingsPage = () => {
  // State to keep track of how to sort the standings
  const [sort, setSort] = useState<number>(0); // Default to division sorting

  return (
    <div>
      <select onChange={(v) => setSort(parseInt(v.target.value))}>
        <option value={0}>Division</option>
        <option value={1}>Wildcard</option>
        <option value={2}>Conference</option>
        <option value={3}>League</option>
      </select>
      {renderStandings(sort)}
    </div>
  );
};

export default StandingsPage;
