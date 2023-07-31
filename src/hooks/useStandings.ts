import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DivisionRecord } from "../interfaces/DivisionRecord";

// Function to fetch the standings with axios
const fetchStandings = () => {
  return axios
    .get("https://statsapi.web.nhl.com/api/v1/standings")
    .then((results) => results.data.records);
};

const useStandings = () => {
  return useQuery<DivisionRecord[]>({
    queryKey: ["standings"],
    queryFn: fetchStandings, // Use fetchStandings to get data
  });
};

export default useStandings;
