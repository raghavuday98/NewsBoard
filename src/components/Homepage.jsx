import React, { useState } from "react";
import Navbar from "./navbar";
import Topics from "./Topics";
import Feed from "./Feed";
import App from "./Test";

const Homepage = () => {
  const [search, setSearch] = useState("india");

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar search={search} setSearch={setSearch} />
      <Topics />
      <Feed searchQuery={search} />
      <App />
    </div>
  );
};

export default Homepage;
