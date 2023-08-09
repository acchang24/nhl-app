import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Function to fetch standings with axios
function fetchLeagueStandings() {
  return axios
    .get("https://statsapi.web.nhl.com/api/v1/standings/byLeague")
    .then((results) => results.data.records);
}

// Hook to fetch team standings sorted by league
const useLeagueStandings = () => {
  return useQuery({
    queryKey: ["leagueStandings"],
    queryFn: fetchLeagueStandings,
  });
};

export default useLeagueStandings;
