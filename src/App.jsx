import { Button } from "@material-tailwind/react";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const clicked = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto">
        <Button onClick={clicked}>{count} Clicked</Button>;
      </div>
    </div>
  );
}
