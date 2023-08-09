import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Function to fetch standings with axios
function fetchConferenceStandings() {
  return axios
    .get("https://statsapi.web.nhl.com/api/v1/standings/byConference")
    .then((results) => results.data.records);
}

// Hook to fetch team standings sorted by conference
const useConferenceStandings = () => {
  return useQuery({
    queryKey: ["conferenceStandings"],
    queryFn: fetchConferenceStandings,
  });
};

export default useConferenceStandings;
