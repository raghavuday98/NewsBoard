const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  try {
    console.log(`[API] Fetching news for query: "${query}"`);
    
    // Use Vercel proxy endpoint in production, direct API in development
    const isDev = !window.location.hostname.includes('vercel.app');
    let url;
    
    if (isDev) {
      // Development: direct call to NewsAPI
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
    } else {
      // Production: use Vercel serverless proxy
      url = `/api/news?query=${encodeURIComponent(query)}`;
    }
    
    console.log(`[API] URL: ${url}, isDev: ${isDev}`);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    console.log(`[API] Response status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    console.log(`[API] Response data:`, jsonData);

    // Check for API errors
    if (jsonData.status === "error") {
      throw new Error(jsonData.message || "Failed to fetch news");
    }

    const articles = jsonData.articles || [];
    console.log(`[API] Returning ${articles.length} articles`);
    return articles;
  } catch (error) {
    console.error("[API] Error:", error);
    throw error;
  }
};
