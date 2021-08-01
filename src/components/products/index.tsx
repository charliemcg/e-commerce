import React, { useState } from "react";
import strap from "../../strap.png";

export default () => {
  const [color, setColor] = useState("red-500");
  return (
    <div>
      <div className="flex justify-center">
        <img src={strap} className={`object-scale-down h-80 bg-${color}`} />
      </div>
      <div className="flex flex-row justify-center">
        <div
          className={`h-10 w-10 bg-red-500`}
          onClick={() => setColor("red-500")}
        />
        <div
          className="h-10 w-10 bg-blue-500"
          onClick={() => setColor("blue-500")}
        />
        <div
          className="h-10 w-10 bg-green-500"
          onClick={() => setColor("green-500")}
        />
        <div
          className="h-10 w-10 bg-yellow-500"
          onClick={() => setColor("yellow-500")}
        />
        <div className="h-10 w-10 bg-white" onClick={() => setColor("white")} />
        <div
          className="h-10 w-10 bg-pink-500"
          onClick={() => setColor("pink-500")}
        />
        <div className="h-10 w-10 bg-black" onClick={() => setColor("black")} />
      </div>
    </div>
  );
};
