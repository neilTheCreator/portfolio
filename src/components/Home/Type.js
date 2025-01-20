import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Lead Software Engineer",
          "Full Stack Developer",
          "DevOps Engineer",
          "Team Leader",
          "Software Architect"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
