import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "",
    pic: "staysafe.png",
    heading: "Reloo, Find A Hostel",
    discr: "A Hostel Booking System",
    tags: [
      { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
      { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  }
];
