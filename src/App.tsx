import React, { useRef } from "react";
import MyNavBar from "./components/MyNavBar.tsx";
import Summary from "./components/Summary.tsx";
import About from "./components/About.tsx";
import Technologies from "./components/Technologies.tsx";
import Experience from "./components/Experience.tsx";
import Project from "./components/Project.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";

const App = () => {
  const contactMeRef = useRef(null);
  const scrollToContact = () => {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-100 selection:text-purple-700">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-14 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#2f1a4d_100%)]"></div>
      </div>
      <div className="mx-auto">
        <MyNavBar onClickContact={scrollToContact} />
        <div className="mx-auto px-8">
          <Summary />
          <Technologies />
          <Experience />
          <Project />
          <Education />
          <About />
          <Contact ref={contactMeRef} />
        </div>
      </div>
    </div>
  );
};

export default App;
