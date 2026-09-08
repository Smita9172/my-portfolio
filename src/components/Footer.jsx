import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowUp,
} from "react-icons/fa";

import profile from "../data/profile";

function Footer() {

  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

  return (

    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">

              {profile.name}

            </h2>

            <p className="text-gray-400 mt-4">
             Aspiring Software Developer and Data Analyst passionate about
             building responsive applications and creating data-driven solutions
                using modern technologies.

            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="mt-4 space-y-3 text-gray-400">

              <li><a href="/">Home</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/projects">Projects</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-semibold">

              Connect

            </h3>

            <div className="flex gap-5 mt-5 text-3xl">

              <a
                href={profile.github}
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
              >
                <FaCode />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-800 my-10"/>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500">

            © {new Date().getFullYear()} Smita Sharma.
            All Rights Reserved.

          </p>

          <button

            onClick={scrollTop}

            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition"

          >

            <FaArrowUp/>

          </button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;