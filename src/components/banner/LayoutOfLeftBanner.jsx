import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function LayoutOfLeftBanner() {
  const [text] = useTypewriter({
    words: ["Front End Developer.", "React Developer.", "Angular Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col gap-5">
      {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
      <h1 className="text-3xl font-bold text-white">
        Hello, My name is{" "}
        <span className="text-designColor capitalize block text-6xl">
          Anand Kumar
        </span>
      </h1>
      <h2 className="text-3xl font-bold text-white">
        I am a <span className="text-designColor">{text}</span>
        <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
        Aspiring Front-end Web Developer proficient in modern frameworks and
        technologies, including React JS, Angular, Ionic, Tailwind, and
        Bootstrap, eager to contribute to impactful projects and grow with a
        dynamic organization.
      </p>
    </div>
  );
}

export default LayoutOfLeftBanner;
