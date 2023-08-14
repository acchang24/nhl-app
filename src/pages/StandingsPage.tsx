import useStandingsStore from "../store";
import DivisionStandings from "../components/DivisionStandings";
import WildCardStandings from "../components/WildCardStandings";
import ConferenceStandings from "../components/ConferenceStandings";
import LeagueStandings from "../components/LeagueStandings";
import Selector from "../components/Selector";
import { Option } from "../components/Selector";
import "./css/StandingsPage.css";

// Renders the standings table based on state's sort
function renderStandings(sort: number, year: string) {
  switch (sort) {
    case 0:
      return <DivisionStandings year={year ? year : ""}></DivisionStandings>;
    case 1:
      return <WildCardStandings year={year ? year : ""}></WildCardStandings>;
    case 2:
      return (
        <ConferenceStandings year={year ? year : ""}></ConferenceStandings>
      );
    case 3:
      return <LeagueStandings year={year ? year : ""}></LeagueStandings>;
  }
}

// Function to calculate all available NHL Seasons
function getSeasonOptions(): Option[] {
  // Get the current year
  let currentYear = new Date().getFullYear();

  // If start of new season add 1 to year
  let currentMonth = new Date().getMonth();
  // Increment the year by October (start of new season)
  if (currentMonth > 9) {
    currentYear++;
  }

  // New array of options
  const options: Option[] = [];

  let index = 0;

  // Loop through starting from NHL's 1999-2000 season
  for (let i = 1990; i < currentYear; ++i) {
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

// Function to remove the dash between years
function delimitYear(year: string): string {
  const index = year.indexOf("-");
  let newYear = year.slice(0, index) + year.slice(index + 1);
  return newYear;
}

const StandingsPage = () => {
  // Get global state's standings sort order
  const sortStandingsOrder = useStandingsStore((state) => state.sortStandings);
  // Get global state's setSortStandings function
  const setSortStandings = useStandingsStore((state) => state.setSortStandings);
  // Get global state's year standings
  const yearStandings = useStandingsStore((state) => state.sortYear);
  // Get global state's setYearStandings function
  const setYearStandings = useStandingsStore((state) => state.setYearStandings);

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
        defaultOption={
          yearStandings === "" ? seasonOptions[0].name : yearStandings
        } // Pass in global state's sortStandings as default option
        onSelect={(item) => {
          setYearStandings(item.name);
        }}
      ></Selector>
      {renderStandings(
        sortStandingsOrder,
        yearStandings === ""
          ? delimitYear(seasonOptions[0].name)
          : delimitYear(yearStandings)
      )}
    </div>
  );
};

export default StandingsPage;
