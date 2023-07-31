import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Schedule } from "../interfaces/Schedule";

// Function that fetches data from api using axios
const fetchGamesToday = () => {
  return axios
    .get(
      "https://statsapi.web.nhl.com/api/v1/schedule?&startDate=2018-01-02&endDate=2018-01-02"
    )
    .then((response) => response.data.dates[0]); // Get more specific data from api
};

// Hook to fetch NHL games that are being played today using ReactQuery
const useGamesToday = () => {
  // Call the useQuery hook
  return useQuery<Schedule, Error>({
    queryKey: ["games"],
    queryFn: fetchGamesToday, // Use fetchGamesToday to get data
  });
};

export default useGamesToday;
