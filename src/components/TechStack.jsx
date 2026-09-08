import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Python", icon: <FaPython/> },
];

function TechStack() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 overflow-hidden py-6">
      <div className="flex whitespace-nowrap animate-marquee gap-16 text-cyan-400 text-xl font-semibold">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 shrink-0"
          >
            <span className="text-3xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;