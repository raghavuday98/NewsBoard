import React from "react";
import { useState, useEffect } from "react";
import { getData } from "./Api";

function Feed({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      getData(searchQuery).then((res) => setArticles(res));
    }
  }, [searchQuery]);

  return <div className="w-full bg-zinc-100"></div>;
}

export default Feed;
