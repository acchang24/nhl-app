import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home></Home> },
      { path: "teams", element: <div>teams</div> },
    ],
  },
]);

export default router;
