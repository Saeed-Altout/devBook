import { useState } from "react";
import {
  Navbar,
  About,
  Contact,
  Content,
  Footer,
  Hero,
  Reviews,
  Services,
  Target,
} from "./layouts/index";
import { FaSun, FaMoon } from "react-icons/fa";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : "light"} font-poppins`}>
      <div className="dark:bg-[#03010b]">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className={`fixed top-10 right-8 text-3xl ${
            darkMode ? "text-white" : "text-[#ed6524]"
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Services />
          <Content />
          <Target />
          <Contact />
          <Reviews />
          <About />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
