import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DivisionRecord } from "../interfaces/DivisionRecord";

// Function to fetch the standings with axios
function fetchWildCardStandings() {
  return axios
    .get("https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders")
    .then((results) => results.data.records);
}

// Hook to fetch team standings sorted by wild card
const useWildCardStandings = () => {
  return useQuery<DivisionRecord[]>({
    queryKey: ["wildCardStandings"],
    queryFn: fetchWildCardStandings, // use fetchWildCardStandings to get data
  });
};

export default useWildCardStandings;
