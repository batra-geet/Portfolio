import React from "react";
import MyNavBar from "./components/MyNavBar.tsx";
import Summary from "./components/Summary.tsx";
import About from "./components/About.tsx";
import Technologies from "./components/Technologies.tsx";
import Experience from "./components/Experience.tsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-6">
        <MyNavBar />
        <Summary />
        <About />
        <Technologies />
        <Experience />
      </div>
    </div>
  );
};

export default App;
