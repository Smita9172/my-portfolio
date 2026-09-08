import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-950">

      {/* Same alignment as Navbar and Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Projects
          </h2>

          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Some projects I've worked on.
          </p>
        </div>


        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
            mt-10
            sm:mt-12
          "
        >

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                flex-col
                bg-slate-900
                rounded-xl
                overflow-hidden
                border
                border-slate-800
                shadow-lg
                hover:border-cyan-500/50
                transition-colors
                duration-300
              "
            >

              {/* Project Header */}
            


              {/* Project Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>


                {/* Year */}
                <p className="text-cyan-400 text-xs sm:text-sm mt-1.5">
                  {project.year}
                </p>


                {/* Description */}
                <p
                  className="
                    text-slate-400
                    mt-3
                    leading-6
                    text-sm
                  "
                >
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-4">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-cyan-500/20
                        text-cyan-300
                        px-2.5
                        py-1
                        rounded-full
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>


                {/* Buttons */}
                <div className="flex flex-wrap gap-2.5 mt-5">

                  {/* GitHub */}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        bg-slate-800
                        px-3.5
                        py-1.5
                        rounded-lg
                        text-sm
                        hover:bg-cyan-500
                        transition
                        duration-300
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}


                  {/* Live Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        bg-cyan-500
                        px-3.5
                        py-1.5
                        rounded-lg
                        text-sm
                        hover:bg-cyan-600
                        transition
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;