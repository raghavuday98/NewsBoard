import React, { useState } from 'react';

// --- Helper Components & Data ---

// Icon components (using inline SVG for portability)
const SearchIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        </div>
        <span className="text-2xl font-bold text-slate-800">NewsBoard</span>
    </div>
);


// Mock data for news articles
const mockArticles = [
  {
    id: 1,
    category: 'Technology',
    title: 'The Future of AI: What to Expect in the Next Decade',
    summary: 'Experts weigh in on the rapid advancements in artificial intelligence and its potential impact on society, from autonomous vehicles to personalized medicine.',
    imageUrl: 'https://placehold.co/600x400/007BFF/FFFFFF?text=AI+Future',
    author: 'Jane Doe',
    date: 'Sep 12, 2025',
    featured: true,
  },
  {
    id: 2,
    category: 'Politics',
    title: 'Global Leaders Summit Addresses Climate Change',
    summary: 'World leaders gathered this week to discuss new international agreements aimed at combating the escalating climate crisis.',
    imageUrl: 'https://placehold.co/600x400/28A745/FFFFFF?text=Climate+Summit',
    author: 'John Smith',
    date: 'Sep 11, 2025',
  },
  {
    id: 3,
    category: 'Business',
    title: 'Market Trends: A Shift Towards Sustainable Investing',
    summary: 'A new report shows a significant increase in investments flowing into companies with strong environmental, social, and governance (ESG) records.',
    imageUrl: 'https://placehold.co/600x400/FFC107/333333?text=Market+Trends',
    author: 'Emily White',
    date: 'Sep 11, 2025',
  },
  {
    id: 4,
    category: 'Health',
    title: 'Breakthrough in Cancer Research Announced',
    summary: 'Scientists have discovered a new therapy that shows promising results in early-stage trials, offering new hope for patients.',
    imageUrl: 'https://placehold.co/600x400/DC3545/FFFFFF?text=Health+News',
    author: 'Dr. Michael Lee',
    date: 'Sep 10, 2025',
  },
  {
    id: 5,
    category: 'Sports',
    title: 'Underdogs Clinch Championship in Stunning Upset',
    summary: 'The final match of the season ended in a surprising victory that will be remembered by fans for years to come.',
    imageUrl: 'https://placehold.co/600x400/17A2B8/FFFFFF?text=Sports+Win',
    author: 'Chris Johnson',
    date: 'Sep 9, 2025',
  },
  {
    id: 6,
    category: 'Technology',
    title: 'New Quantum Computing Chip Unveiled',
    summary: 'A tech giant has just revealed a quantum processor that they claim can solve problems previously thought impossible.',
    imageUrl: 'https://placehold.co/600x400/6f42c1/FFFFFF?text=Quantum+Chip',
    author: 'Alex Williams',
    date: 'Sep 9, 2025',
  },
];

const topics = ['All', 'Technology', 'Politics', 'Business', 'Health', 'Sports'];


// --- Main App Component ---

export default function App() {
  const [activeTopic, setActiveTopic] = useState('All');

  const featuredArticle = mockArticles.find(a => a.featured);
  const regularArticles = mockArticles.filter(a => !a.featured);

  const filteredArticles = activeTopic === 'All'
    ? regularArticles
    : regularArticles.filter(article => article.category === activeTopic);

  const TopicButton = ({ topic }) => {
    const isActive = activeTopic === topic;
    return (
      <button
        onClick={() => setActiveTopic(topic)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
          isActive
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'
        }`}
      >
        {topic}
      </button>
    );
  };

  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
      <div className="overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={`Image for ${article.title}`} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase">{article.category}</span>
        <h3 className="mt-2 text-lg font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{article.summary}</p>
        <div className="mt-4 text-xs text-slate-500">
          <span>By {article.author}</span> &middot; <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
  
   const FeaturedArticleCard = ({ article }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg md:flex group">
        <div className="md:w-1/2">
             <img 
              src={article.imageUrl} 
              alt={`Image for ${article.title}`} 
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-semibold text-blue-600 uppercase">{article.category}</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors duration-300">
              {article.title}
            </h2>
            <p className="mt-4 text-slate-600">{article.summary}</p>
            <div className="mt-6 text-sm text-slate-500">
              <span>By {article.author}</span> &middot; <span>{article.date}</span>
            </div>
        </div>
    </div>
  );


  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Header */}
     
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Featured Article */}
        {/* {featuredArticle && (
             <section>
                <FeaturedArticleCard article={featuredArticle} />
             </section>
        )} */}

        {/* Topics Navigation */}
        {/* <section className="mt-8 md:mt-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
                <div className="hidden md:flex items-center space-x-2 p-1 bg-slate-200/50 rounded-full">
                    {topics.map(topic => <TopicButton key={topic} topic={topic} />)}
                </div>
            </div> */}
             {/* Topics Dropdown for Mobile */}
            {/* <div className="md:hidden mb-6">
                <select 
                    onChange={(e) => setActiveTopic(e.target.value)}
                    value={activeTopic}
                    className="w-full p-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                </select>
            </div>
        </section> */}

        {/* Articles Grid */}
        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
