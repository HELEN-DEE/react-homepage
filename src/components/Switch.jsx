import React, { useState } from "react";
import Counter from "./Counter"

const Switch = () => {
  const [switchState, setSwitchState] = useState("off");

  // const toggleSwitch = () => {
  //   setSwitchState((prevState) => {
  //     if (prevState === "off") {
  //       return "on";
  //     } else {
  //       return "off";
  //     }
  //   });
  // };

const toggleSwitch = () => {
    setSwitchState((prevState) => (prevState === "off" ? "on" : "off"));
};

return (
    <div
        className={` ${
        switchState === "on" ? "bg-violet-400" : "bg-zinc-700"
    } py-8 h-screen w-screen`}
    >
    <h1 className="text-center text-6xl text-white">Switch Example</h1>

    
    <div className="flex items-center justify-center my-8">
        <button
            className="border px-8 text-3xl font-bold py-4 text-center text-white"
            onClick={toggleSwitch}
        >
          {/* Ternary Operator */}
            {switchState === "on" ? "ON" : "OFF"}
        </button>
    </div>
    <p className="text-center text-white text-2xl">The switch is currently {switchState}</p>

    <Counter/>
    </div>
);
};

export default Switch;
