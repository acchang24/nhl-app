import { useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";

const TeamPage = () => {
  // Get the id of the team through its url
  const { id } = useParams();

  const { data } = useTeam(id!);

  console.log(data);

  return <div>TeamPage {id}</div>;
};

export default TeamPage;
