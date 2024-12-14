import React from "react";
import SkillsCard from "./SkillsCard";
import Title from "../layouts/Title";
import {
  html,
  css,
  javascript,
  react,
  tailwind,
  typescript,
  scss,
  redux,
  git,
  bootstrap,
  devExtreme,
  angular,
  ionic,
} from "../../assets/images";

function Skills() {
  return (
    <section id="skills" className="w-full py-10 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          des={
            <span>
              My <span className="text-designColor">Technical</span> Skills
            </span>
          }
        />
      </div>
      <div className="w-[90%] m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-14">
        {/* Core Web Technologies */}
        <SkillsCard name={"HTML"} src={html} />
        <SkillsCard name={"CSS"} src={css} />
        <SkillsCard name={"JAVASCRIPT"} src={javascript} />

        {/* Frameworks & Libraries */}
        <SkillsCard name={"TYPESCRIPT"} src={typescript} />
        <SkillsCard name={"REACT"} src={react} />
        <SkillsCard name={"ANGULAR"} src={angular} />
        <SkillsCard name={"IONIC"} src={ionic} />
        <SkillsCard name={"REDUX"} src={redux} />

        {/* Styling Tools */}
        <SkillsCard name={"SCSS"} src={scss} />
        <SkillsCard name={"TAILWIND"} src={tailwind} />
        <SkillsCard name={"BOOTSTRAP"} src={bootstrap} />

        {/* Additional Tools */}
        <SkillsCard name={"DEVEXTREME"} src={devExtreme} />
        <SkillsCard name={"GIT"} src={git} />
      </div>
    </section>
  );
}

export default Skills;
