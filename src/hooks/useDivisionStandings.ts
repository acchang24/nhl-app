import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DivisionRecord } from "../interfaces/DivisionRecord";
import useStandingsStore from "../store";

// Function to fetch the standings with axios
const fetchDivisionStandings = (year: string) => {
  return axios
    .get(`https://statsapi.web.nhl.com/api/v1/standings?season=${year}`)
    .then((results) => results.data.records);
};

// Hook to fetch team standings sorted by division
const useDivisionStandings = (year: string) => {
  // Get state's year sort
  const sortYear = useStandingsStore((state) => state.sortYear);

  return useQuery<DivisionRecord[]>({
    queryKey: ["divisionStandings", sortYear], // Fetch new data everytime sort year is changed
    queryFn: () => fetchDivisionStandings(year), // Use fetchStandings to get data
  });
};

export default useDivisionStandings;
