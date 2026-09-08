import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import AboutPage from "../src/pages/AboutPage";
import ProjectsPage from "../src/pages/ProjectPage";
import ContactPage from "../src/pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;