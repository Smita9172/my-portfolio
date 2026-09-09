import { motion } from "framer-motion";
import nimmiabout from "../assets/Nimmiabout.jpeg"

function About() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          {/* Left */}

          
          <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
    w-full
    flex
    justify-center
    items-center
  "
>

  {/* Outer glow + ring wrapper */}
  <div
    className="
      relative
      w-56 h-56
      sm:w-64 sm:h-64
      md:w-72 md:h-72
      lg:w-80 lg:h-80
      xl:w-[380px] xl:h-[380px]
      max-w-full
      rounded-full
      flex items-center justify-center
    "
  >

    {/* Soft glow behind everything */}
    <div
      className="
        absolute inset-0
        rounded-full
        bg-cyan-500/20
        blur-3xl
      "
    />

    {/* Thin outer ring — offset from the photo */}
    <div
      className="
        absolute inset-0
        rounded-full
        border
        border-cyan-400/40
        shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    />

    {/* Profile Photo — smaller, sitting inside the ring with a gap */}
    <img
      src={nimmiabout}
      alt="Profile"
      className="
        w-[88%] h-[88%]
        rounded-full
        object-cover
        relative
        z-10
      "
    />

  </div>

</motion.div>


          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-4">
              Frontend Developer & Automation Enthusiast
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6">
               I'm an MCA student passionate about crafting intuitive user experiences 
  and solving complex problems through Data Structures & Algorithms. 
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
               My expertise spans UI/UX design (Figma), frontend development 
  (React, JavaScript, Tailwind CSS), and AI-agent automation 
  (CrewAI, LangChain). I love bridging design and logic — building 
  interfaces that are both functional and delightful.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-800 p-4 rounded-xl">
                <h4 className="font-bold text-cyan-400">
                3+                </h4>
                <p>Projects</p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl">
                <h4 className="font-bold text-cyan-400">
                  🏆
                </h4>
                <p>Hackathon Winner </p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl">
                <h4 className="font-bold text-cyan-400">
                  10+
                </h4>
                <p>Technologies</p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl">
                <h4 className="font-bold text-cyan-400">
                  4+
                </h4>
                <p>Certifications</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;