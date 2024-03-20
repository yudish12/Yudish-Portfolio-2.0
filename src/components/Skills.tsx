import { skillsArr } from "@/utils";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-6">
      <h1 className="text-[#ffffff] tracking-[3px] bebas-neue px-12 py-4 mt-4 text-3xl">
        What I Know
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 px-12">
        {skillsArr.map((e) => (
          <SkillCard type={e.type} skills={e.skills} key={e.type} />
        ))}
      </div>
      
    </div>
  );
};

export default Skills;
