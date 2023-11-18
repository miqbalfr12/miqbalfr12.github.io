import Counter from "./Pages/Counter";
import App from "./App";
import Landing from "./Pages/Landing";

export const Router = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/all",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
];
