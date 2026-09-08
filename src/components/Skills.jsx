import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiC, SiCplusplus, SiOpenjdk } from "react-icons/si";

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={32} /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} /> },
      { name: "JavaScript", icon: <FaJs size={32} /> },
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
      { name: "Bootstrap", icon: <FaBootstrap size={32} /> },
    ],
  },
  {
    title: "DSA & Programming",
    skills: [
      { name: "C", icon: <SiC size={32} /> },
      { name: "C++", icon: <SiCplusplus size={32} /> },
      { name: "Java", icon: <SiOpenjdk size={32} /> },
      { name: "Python", icon: <FaPython size={32} /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={32} /> },
      { name: "GitHub", icon: <FaGithub size={32} /> },
    ],
  },
];

function Skills() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My Skills
          </h2>

          <p className="text-center text-slate-400 mt-4">
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* Category Sections */}
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6 text-center md:text-left">
                {category.title}
              </h3>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <div className="flex justify-center text-cyan-400">
                      {skill.icon}
                    </div>

                    <h4 className="mt-2 font-medium text-sm text-white">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;