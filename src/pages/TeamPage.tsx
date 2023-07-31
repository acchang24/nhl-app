import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

const TeamPage = () => {
  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`)
      .then((response) => console.log(response.data.teams[0]));
  }, []);

  // Get the id of the team through its url
  const { id } = useParams();

  return <div>TeamPage {id}</div>;
};

export default TeamPage;
