const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  try {
    console.log(`[API] Fetching news for query: "${query}"`);

    const isDev = !window.location.hostname.includes("vercel.app");

    // Build URL
    const encodedQuery = encodeURIComponent(query);
    const url = isDev
      ? `https://newsapi.org/v2/everything?q=${encodedQuery}&apiKey=${API_KEY}`
      : `/api/news?query=${encodedQuery}`;

    console.log(`[API] URL: ${url}, isDev: ${isDev}`);

    // Fetch
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    console.log(`[API] Response status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("[API] Response data:", data);

    // Validate NewsAPI response
    if (data.status === "error") {
      throw new Error(data.message || "News API returned an error");
    }

    const articles = Array.isArray(data.articles) ? data.articles : [];
    console.log(`[API] Returning ${articles.length} articles`);

    return articles;

  } catch (error) {
    console.error("[API] Error:", error);
    throw error;
  }
};
