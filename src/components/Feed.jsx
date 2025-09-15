import React, { useState, useEffect } from "react";
import { getData } from "./Api";
import Card from "./Card";

function Feed({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      getData(searchQuery).then((res) => setArticles(res));
    }
  }, [searchQuery]);

  return (
    <div className="w-full bg-zinc-100">
      <Card data={articles} />
    </div>
  );
}

export default Feed;