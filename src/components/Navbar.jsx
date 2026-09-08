import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 
 
function Navbar() { 
  const [menuOpen, setMenuOpen] = useState(false); 
 
  return ( 
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"> 
 
      {/* Main Container */} 
      <div > 
 
        {/* Navbar Content */} 
        <div className="flex items-center justify-around h-16"> 
 
          {/* Logo */} 
          <Link 
            to="/" 
            className="text-2xl font-bold text-cyan-400" 
          > 
            Smita Sharma 
          </Link> 
 
          {/* Desktop Navigation */} 
          <ul className="hidden md:flex items-center gap-8 text-slate-300"> 
            <li> 
              <Link 
                to="/" 
                className="hover:text-cyan-400 transition" 
              > 
                Home 
              </Link> 
            </li> 
 
            <li> 
              <Link 
                to="#" 
                className="hover:text-cyan-400 transition" 
              > 
                About 
              </Link> 
            </li> 
 
            <li> 
              <Link 
                to="#" 
                className="hover:text-cyan-400 transition" 
              > 
                Projects 
              </Link> 
            </li> 
 
             
          </ul> 
 
          {/* Social Icons */} 
          <div className="hidden md:flex items-center gap-5 text-xl text-slate-300 bg-"> 
            <a 
              href="https://github.com/Smita9172" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 transition" 
              aria-label="GitHub" 
            > 
              <FaGithub /> 
            </a> 

            <a 
              href="https://www.linkedin.com/in/smitasharma16/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 transition" 
              aria-label="LinkedIn" 
            > 
              <FaLinkedin /> 
            </a> 

            <a 
              href="https://www.instagram.com/your_username" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-cyan-400 transition" 
              aria-label="Instagram" 
            > 
              <FaInstagram /> 
            </a> 
          </div> 
 
          {/* Mobile Menu Button */} 
          <button 
            className="md:hidden text-2xl text-white" 
            onClick={() => setMenuOpen(!menuOpen)} 
          > 
            {menuOpen ? <FaTimes /> : <FaBars />} 
          </button> 
 
        </div> 
      </div> 
 
      {/* Mobile Menu */} 
      {menuOpen && ( 
        <div className="md:hidden bg-slate-900 border-t border-slate-800"> 
 
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"> 
 
            <ul className="flex flex-col py-6 gap-4 text-slate-300"> 
 
              <li> 
                <Link 
                  to="/" 
                  onClick={() => setMenuOpen(false)} 
                  className="hover:text-cyan-400" 
                > 
                  Home 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/about" 
                  onClick={() => setMenuOpen(false)} 
                  className="hover:text-cyan-400" 
                > 
                  About 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/projects" 
                  onClick={() => setMenuOpen(false)} 
                  className="hover:text-cyan-400" 
                > 
                  Projects 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/contact" 
                  onClick={() => setMenuOpen(false)} 
                  className="hover:text-cyan-400" 
                > 
                  Contact 
                </Link> 
              </li> 

              {/* Social Icons — Mobile */} 
              <li className="flex items-center gap-6 text-2xl pt-2"> 
                <a 
                  href="https://github.com/Smita9172" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400" 
                  aria-label="GitHub" 
                > 
                  <FaGithub /> 
                </a> 

                <a 
                  href="https://www.linkedin.com/in/smitasharma16/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400" 
                  aria-label="LinkedIn" 
                > 
                  <FaLinkedin /> 
                </a> 

                <a 
                  href="https://www.instagram.com/your_username" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400" 
                  aria-label="Instagram" 
                > 
                  <FaInstagram /> 
                </a> 
              </li> 
 
            </ul> 
          </div> 
        </div> 
      )} 
 
    </nav> 
  ); 
} 
 
export default Navbar;