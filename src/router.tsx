import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Games from "./pages/Games";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "games", element: <Games></Games> },
      { path: "stats", element: <div>Stats</div> },
      { path: "teams", element: <div>teams</div> },
      { path: "players", element: <div>players</div> },
      { path: "login", element: <div>login</div> },
    ],
  },
]);

export default router;
