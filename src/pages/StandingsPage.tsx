import useNhlStore from "../store";
import DivisionStandings from "../components/DivisionStandings";
import WildCardStandings from "../components/WildCardStandings";
import ConferenceStandings from "../components/ConferenceStandings";
import LeagueStandings from "../components/LeagueStandings";
import Selector from "../components/Selector";
import "./css/StandingsPage.css"

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
      return <LeagueStandings></LeagueStandings>;
  }
}

const StandingsPage = () => {
  // Get global state's standings sort order
  const sortStandings = useNhlStore((state) => state.sortStandings);
  // Get global state's setSortStandings function
  const setSortStandings = useNhlStore((state) => state.setSortStandings);

  const options = [
    { id: 0, name: "Division" },
    { id: 1, name: "Wildcard" },
    { id: 2, name: "Conference" },
    { id: 3, name: "League" },
  ];

  return (
    <div className="standings-container">
      <Selector
        data={options}
        defaultOption={options[sortStandings].name} // Pass in global state's sortStandings as default option
        onSelect={(item) => setSortStandings(item.id)}
      ></Selector>
      {renderStandings(sortStandings)}
    </div>
  );
};

export default StandingsPage;
