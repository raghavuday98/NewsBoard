import React from "react";
import Navbar from "./navbar";
import Topics from "./Topics";
import Feed from "./Feed";
import App from "./Test";

const Homepage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar />
      <Topics />
      <Feed />
      <App />
    </div>
  );
};

export default Homepage;
