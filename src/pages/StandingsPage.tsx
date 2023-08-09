import useNhlStore from "../store";
import DivisionStandings from "../components/DivisionStandings";
import WildCardStandings from "../components/WildCardStandings";
import ConferenceStandings from "../components/ConferenceStandings";

// Renders the standings table based on state's sort
function renderStandings(sort: number) {
  switch (sort) {
    case 0:
      return <DivisionStandings></DivisionStandings>;
    case 1:
      return <WildCardStandings></WildCardStandings>;
    case 2:
      return <ConferenceStandings></ConferenceStandings>;
    case 3:
      return <>League</>;
  }
}

const StandingsPage = () => {
  // Get global state's standings sort order
  const sortStandings = useNhlStore((state) => state.sortStandings);
  // Get global state's setSortStandings function
  const setSortStandings = useNhlStore((state) => state.setSortStandings);

  return (
    <div>
      <select
        defaultValue={sortStandings}
        onChange={(v) => {
          // Set the global state's sort standings variable
          setSortStandings(parseInt(v.target.value));
        }}
      >
        <option value={0}>Division</option>
        <option value={1}>Wildcard</option>
        <option value={2}>Conference</option>
        <option value={3}>League</option>
      </select>
      {renderStandings(sortStandings)}
    </div>
  );
};

export default StandingsPage;
