import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import StandingsPage from "./pages/StandingsPage";
import TeamPage from "./pages/TeamPage";
import TeamsPage from "./pages/TeamsPage";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games", element: <GamesPage></GamesPage> },
      { path: "standings", element: <StandingsPage></StandingsPage> },
      { path: "teams", element: <TeamsPage></TeamsPage> },
      { path: "teams/:id", element: <TeamPage></TeamPage> },
      { path: "players", element: <div>players</div> },
      { path: "login", element: <div>login</div> },
    ],
  },
]);

export default router;
