import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "Won HackIndia 2026",
    place: "Trackify AI",
    description:
      "Built a head-movement tracking system using OpenTrack, integrated with a game for hands-free control. Presented at HackIndia 2026 and selected as a winning project.",
  },
  {
    year: "2026",
    title: "Data Science Workshop",
    place: "ABES Engineering College",
    description:
      "Explored machine learning, data analysis, and AI concepts through a hands-on workshop, strengthening my foundation in data science.",
  },
  
  {
    year: "2025",
    title: "Started MCA",
    place: "ABES Engineering College",
    description:
      "Began my Master of Computer Applications, deepening my focus on web development, programming, and software engineering — alongside personal projects in automation (Playwright) and multi-agent AI systems (CrewAI, LangChain).",
  },
  {
    year: "2024",
    title: "Management Trainee – IT Department",
    place: "Saksham Trading Corporation, Jaipur",
    description:
      "Led website updates and maintenance while providing internal IT support. Gained hands-on exposure to real-time IT operations and frontend workflows. Also built the Saksham Trade Website using React.",
  },
  {
    year: "2024",
    title: "Completed BCA",
    place: "Deen Dayal Upadhyaya Gorakhpur University",
    description:
      "Graduated with 77.8%. Built a strong foundation in C, C++, Java, and Data Structures & Algorithms, while developing interactive web pages using HTML, CSS, JavaScript, and React at Infosoft Network.",
  },
  {
    year: "2023",
    title: "Started Learning React & JavaScript",
    place: "Self Learning",
    description:
      "Focused on JavaScript fundamentals, React development, Git, GitHub, and responsive web design — the beginning of my frontend journey.",
  },
];;

function Experience() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My Journey
          </h2>

          <p className="text-center text-slate-400 mt-4">
            A quick overview of my learning and development journey.
          </p>
        </motion.div>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-5 md:left-1/2 top-0 w-1 h-full bg-cyan-500 transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Content */}

              <div className="md:w-1/2 px-8">

                <div className="bg-slate-950 rounded-2xl p-6 border border-slate-700 shadow-lg">

                  <span className="text-cyan-400 font-bold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2">
                    {item.title}
                  </h3>

                  <h4 className="text-slate-400 mt-1">
                    {item.place}
                  </h4>

                  <p className="mt-4 text-slate-300 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* Circle */}

              <div className="hidden md:flex items-start justify-center w-10 relative">
                <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-900 z-10"></div>
              </div>

              <div className="md:w-1/2"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;