import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useStandingsStore from "../store";

// Function to fetch standings with axios
function fetchLeagueStandings(year: string) {
  return axios
    .get(
      `https://statsapi.web.nhl.com/api/v1/standings/byLeague?season=${year}`
    )
    .then((results) => results.data.records);
}

// Hook to fetch team standings sorted by league
const useLeagueStandings = (year: string) => {
  // Get state's year and standings sort
  const sortYear = useStandingsStore((state) => state.sortYear);
  const sortStandings = useStandingsStore((state) => state.sortStandings);

  return useQuery({
    queryKey: ["leagueStandings", sortYear, sortStandings], // Fetch new data everytime sort year/standings is changed
    queryFn: () => fetchLeagueStandings(year), // Use fetchLeagueStandings to get data
  });
};

export default useLeagueStandings;
