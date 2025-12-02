import React, { useState, useEffect } from "react";
import { getData } from "./Api";
import Card from "./Card";

function Feed({ searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 15; // 15 items per page (5 rows x 3 cols)

  useEffect(() => {
    if (!searchQuery) {
      console.log("[Feed] No search query provided");
      return;
    }

    let isCancelled = false;

    const fetchArticles = async () => {
      console.log(`[Feed] Fetching articles for: "${searchQuery}"`);
      setLoading(true);
      setError(null);

      try {
        const result = await getData(searchQuery);
        if (isCancelled) return;

        console.log(`[Feed] Got ${result.length} articles`);
        setArticles(Array.isArray(result) ? result : []);
        setCurrentPage(1); // reset to first page on new results
      } catch (err) {
        if (isCancelled) return;

        console.error("[Feed] Error fetching:", err);
        setError(err.message || "Failed to fetch news. Please try again.");
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchArticles();

    return () => {
      isCancelled = true;
    };
  }, [searchQuery]);

  const totalItems = Array.isArray(articles) ? articles.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedArticles = Array.isArray(articles)
    ? articles.slice(startIndex, startIndex + PAGE_SIZE)
    : [];

  const goToPage = (page) => {
    const nextPage = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-zinc-100">
      <Card data={paginatedArticles} loading={loading} error={error} />

      {!loading && totalItems > PAGE_SIZE && !error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-center">
          <div className="inline-flex items-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md border ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-slate-100"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-1 rounded-md border ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md border ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-slate-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
