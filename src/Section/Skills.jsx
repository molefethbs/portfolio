import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaPython, FaJava, FaReact, FaGithub, FaCode, FaJs, FaDatabase } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const skills = [
  { logo: <FaPython />, title: "Python", disc: "Programming Languages", color: "#3776AB" },
  { logo: <FaCode />, title: "C#", disc: "Programming Languages", color: "#68217A" },
  { logo: <FaJava />, title: "JAVA", disc: "Programming Languages", color: "#F89820" },
  { logo: <FaReact />, title: "React JS", disc: "FrontEnd Development", color: "#61DAFB" },
  { logo: <IoLogoJavascript />, title: "JavaScript", disc: "Programming Languages", color: "#F7DF1E" },
  { logo: <FaDatabase />, title: "MSSQL", disc: "Databases", color: "#CC2927" },
  { logo: <SiPostgresql />, title: "PostgreSQL", disc: "Databases", color: "#336791" },
  { logo: <FaChartSimple  />, title: "Power BI", disc: "Data Analytics", color: "#F24E1E" },
  { logo: <FaChartSimple />, title: "Tableau", disc: "Data Analytics", color: "#0c7ee2" },
  { logo: <FaGithub />, title: "Github", disc: "Version Control", color: "#E6EDF3" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3 stagger-reveal">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
