import useNhlStore from "../store";
import DivisionStandings from "../components/DivisionStandings";
import WildCardStandings from "../components/WildCardStandings";
import ConferenceStandings from "../components/ConferenceStandings";
import LeagueStandings from "../components/LeagueStandings";
import Selector from "../components/Selector";
import { Option } from "../components/Selector";
import "./css/StandingsPage.css";

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

// Function to calculate all available NHL Seasons
function getSeasonOptions(): Option[] {
  // Get the current year
  let currentYear = new Date().getFullYear();

  // New array of options
  const options: Option[] = [];

  let index = 0;

  // Loop through starting from NHL's 1917-1918 season
  for (let i = 1917; i < currentYear; ++i) {
    let secondYear = i + 1;
    let newOption: Option = {
      id: index,
      name: i.toString() + "-" + secondYear.toString(),
    };
    index++;
    options.unshift(newOption);
  }

  return options;
}

function delimitYear(year: string): string {
  const index = year.indexOf("-");
  let newYear = year.slice(0, index) + year.slice(index + 1);
  return newYear;
}

const StandingsPage = () => {
  // Get global state's standings sort order
  const sortStandingsOrder = useNhlStore((state) => state.sortStandings);
  // Get global state's setSortStandings function
  const setSortStandings = useNhlStore((state) => state.setSortStandings);

  const sortOptions: Option[] = [
    { id: 0, name: "Division" },
    { id: 1, name: "Wildcard" },
    { id: 2, name: "Conference" },
    { id: 3, name: "League" },
  ];

  const seasonOptions: Option[] = getSeasonOptions();

  return (
    <div className="standings-container">
      <Selector
        data={sortOptions}
        defaultOption={sortOptions[sortStandingsOrder].name} // Pass in global state's sortStandings as default option
        onSelect={(item) => setSortStandings(item.id)}
      ></Selector>
      <Selector
        data={seasonOptions}
        defaultOption={seasonOptions[0].name} // Pass in global state's sortStandings as default option
        onSelect={(item) => {
          console.log(delimitYear(item.name));
        }}
      ></Selector>
      {renderStandings(sortStandingsOrder)}
    </div>
  );
};

export default StandingsPage;
