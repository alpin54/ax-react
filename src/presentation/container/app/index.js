import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "application/config/routes";

const App = () => {
  const router = createBrowserRouter(routeConfig);
  return <RouterProvider router={router} />;
};

export default App;
