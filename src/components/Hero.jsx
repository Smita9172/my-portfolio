import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../data/profile";
import nimmi from "../assets/nimmiportfolio.jpeg";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          w-72 h-72
          sm:w-96 sm:h-96
          bg-cyan-500/20
          rounded-full
          blur-[120px]
          -top-20
          -left-20
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          w-72 h-72
          sm:w-96 sm:h-96
          bg-purple-500/20
          rounded-full
          blur-[120px]
          bottom-0
          right-0
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          py-24
          sm:py-28
          lg:py-20
        "
      >

        {/* ================= 2 COLUMNS ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-12
            lg:gap-8
          "
        >

          {/* =================================================
                            LEFT COLUMN
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              w-full
              max-w-xl
              mx-auto
              lg:mx-0
              text-center
            "
          >

            {/* Hello */}

            <p
              className="
                text-cyan-400
                font-semibold
                text-base
                sm:text-lg
              "
            >
              Hello, I'm
            </p>


            {/* Name */}

            <h1
              className="
                mt-3
                font-black
                leading-tight
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              {profile.firstName}

              <span className="text-cyan-400">
                {" "}
                {profile.lastName}
              </span>
            </h1>


            {/* ================= TYPE ANIMATION ================= */}

            <div
              className="
                mt-5
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-2xl
                font-semibold
                text-gray-300
                min-h-[36px]
              "
            >
              <TypeAnimation
                sequence={[
                  "Aspiring Software Developer",
                  1800,
                  "Data Analyst",
                  1800,
                  "DSA Enthusiast",
                  1800,
                  "Problem Solver",
                  1800,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>


            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mt-6
                sm:mt-8
                max-w-xl
                text-sm
                sm:text-base
                text-gray-400
                leading-7
                sm:leading-8
              "
            >
              {profile.description}
            </p>


            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-8
                sm:mt-10
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >

              {/* View Projects */}

              <a
  href="#projects"
  className="
    inline-flex
    items-center
    justify-center
    px-6
    sm:px-7
    py-3
    bg-cyan-500
    hover:bg-cyan-600
    text-white
    rounded-xl
    font-semibold
    transition
    duration-300
    whitespace-nowrap
  "
>
  View Projects
</a>


              {/* Download Resume */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  sm:px-7
                  py-3
                  border
                  border-cyan-500
                  text-white
                  hover:bg-cyan-500
                  rounded-xl
                  font-semibold
                  transition
                  duration-300
                  whitespace-nowrap
                "
              >
                Download Resume
              </a>

            </div>

          </motion.div>


          {/* =================================================
                         RIGHT COLUMN
                  FLOATING CODE EDITOR
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              hidden
              lg:flex
              justify-center
              items-center
              relative
              h-[480px]
            "
          >

            {/* ================= MORPHING BACKGROUND ================= */}

            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[420px]
                h-[420px]
                bg-gradient-to-br
                from-cyan-500/30
                via-purple-500/20
                to-pink-500/20
                blur-2xl
              "
            />


            {/* ================= CODE EDITOR ================= */}

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[320px]
                sm:w-[360px]
                rounded-2xl
                overflow-hidden
                bg-slate-900/80
                backdrop-blur-xl
                border
                border-white/10
                shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]
              "
            >

              {/* Editor Top Bar */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  bg-slate-800/60
                  border-b
                  border-white/5
                "
              >
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs text-gray-400 font-mono">
                  portfolio.jsx
                </span>
              </div>


              {/* ================= CODE ================= */}

              <div
                className="
                  p-5
                  font-mono
                  text-sm
                  leading-7
                  text-left
                  overflow-x-auto
                "
              >

                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-cyan-300">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>


                <p className="pl-4">
                  <span className="text-pink-300">
                    name:
                  </span>{" "}
                  <span className="text-green-300">
                    "{profile.firstName} {profile.lastName}"
                  </span>
                  ,
                </p>


                {/* Updated Role */}

               


                {/* Added Focus */}

                <p className="pl-4">
                  <span className="text-pink-300">
                    focus:
                  </span>{" "}
                  [
                  <span className="text-green-300">
                    "Software Development"
                  </span>
                  ,{" "}
                  <span className="text-green-300">
                    "Data Analytics"
                  </span>
                  ],
                </p>


                {/* Updated Skills */}

                <p className="pl-4">
                  <span className="text-pink-300">
                    skills:
                  </span>{" "}
                  [
                  <span className="text-green-300">
                    "React"
                  </span>
                  ,{" "}
                  <span className="text-green-300">
                    "SQL"
                  </span>
                  ,{" "}
                  <span className="text-green-300">
                    "Power BI"
                  </span>
                  ],
                </p>


                {/* Passion */}

                <p className="pl-4">
                  <span className="text-pink-300">
                    passion:
                  </span>{" "}

                  <TypeAnimation
                    sequence={[
                      "problem solving",
                      1500,
                      "learning",
                      1500,
                      "building",
                      1500,
                    ]}
                    speed={40}
                    repeat={Infinity}
                    wrapper="span"
                    className="text-yellow-300"
                  />
                </p>


                <p>
                  {"}"}
                </p>

              </div>

            </motion.div>


            {/* ================= REACT BADGE ================= */}

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="
                absolute
                top-6
                right-4
                z-20
                w-14
                h-14
                rounded-xl
                bg-slate-900/80
                backdrop-blur-md
                border
                border-cyan-400/30
                shadow-lg
                flex
                items-center
                justify-center
                text-cyan-300
                text-xl
                font-bold
              "
            >
              React
            </motion.div>


            {/* ================= JS BADGE ================= */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="
                absolute
                bottom-10
                left-0
                z-20
                w-14
                h-14
                rounded-xl
                bg-slate-900/80
                backdrop-blur-md
                border
                border-yellow-400/30
                shadow-lg
                flex
                items-center
                justify-center
                text-yellow-300
                text-lg
                font-bold
              "
            >
              JS
            </motion.div>


            {/* ================= PURPLE GLOW ================= */}

            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="
                absolute
                bottom-0
                right-10
                z-20
                w-12
                h-12
                rounded-full
                bg-purple-500/70
                shadow-[0_0_30px_8px_rgba(168,85,247,0.35)]
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;