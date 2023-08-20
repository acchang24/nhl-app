import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchTeam = (id: string) => {
  return axios
    .get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
    .then((response) => response.data.teams[0]);
};

const useTeam = (id: string) => {
  return useQuery({
    queryKey: ["team"],
    queryFn: () => fetchTeam(id),
  });
};

export default useTeam;
