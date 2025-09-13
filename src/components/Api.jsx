const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=india&apiKey=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  
};
