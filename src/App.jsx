import React from "react";
import {
  About,
  Contact,
  Content,
  Footer,
  Header,
  Hero,
  Reviews,
  Services,
  Target,
} from "./components/index";

const App = () => {
  return (
    <>
      <header>
        <Header />
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
    </>
  );
};

export default App;
