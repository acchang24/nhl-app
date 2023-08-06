import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DivisionRecord } from "../interfaces/DivisionRecord";

// Function to fetch the standings with axios
const fetchDivisionStandings = () => {
  return axios
    .get("https://statsapi.web.nhl.com/api/v1/standings")
    .then((results) => results.data.records);
};

// Hook to fetch team standings sorted by division
const useDivisionStandings = () => {
  return useQuery<DivisionRecord[]>({
    queryKey: ["divisionStandings"],
    queryFn: fetchDivisionStandings, // Use fetchStandings to get data
  });
};

export default useDivisionStandings;
