import React, { useState } from "react";
import Navbar from "./navbar";
import Topics from "./Topics";
import Feed from "./Feed";

const Homepage = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData]= useState(null) 

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar search={search} setSearch={setSearch} />
      <Topics setSearch={setSearch} />
      <Feed searchQuery={search} newsData={newsData} setNewsData={setNewsData} />
    </div>
  );
};

export default Homepage;
