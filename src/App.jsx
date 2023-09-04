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
          className={`bg-[#ed6524] rounded-l-full p-3 fixed bottom-10 -right-0 text-lg z-[1000] text-white`}
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
