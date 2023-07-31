import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchTeam = (id: string) => {
  axios
    .get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
    .then((response) => response.data);
};

const useTeam = (id: string) => {
  return useQuery({
    queryKey: ["team"],
    queryFn: () => fetchTeam(id),
  });
};

export default useTeam;
