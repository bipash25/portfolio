import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Rookie Programmer",
          "Dumbfound Problem Solver",
          "MERN Stack Developer",
          "Artificial Intelligence Creep",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
