import Counter from "./Pages/Counter";
import App from "./App";

export const Router = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
];
