import React, { useState, useEffect, useRef } from 'react';
import IdeasList from './components/IdeasList';
import IdeaForm from './components/IdeaForm';
import Chatbot from './components/Chatbot';
import { fetchIdeas } from './api';

interface Idea {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef<HTMLDivElement | null>(null);

  

  // Function to fetch ideas and append them to the existing list
  const loadIdeas = async (pageNumber: number) => {
    const data = await fetchIdeas(pageNumber);
    if (data.data.length === 0) {
      setHasMore(false); // Stop fetching when no more ideas are available
    } else {
      setIdeas((prevIdeas) => [...prevIdeas, ...data.data]);
    }
  };

  // Function to refresh the list of ideas (reset to page 1)
  const refreshIdeas = async () => {
    setPage(1);
    const data = await fetchIdeas(1); // Fetch the first page
    setIdeas(data.data);  // Update the list of ideas with the first page
    setHasMore(true);     // Reset hasMore to allow infinite scroll again
  };

  // Load more ideas when the page number changes
  useEffect(() => {
    loadIdeas(page);
  }, [page]);

  // IntersectionObserver to trigger loading more when scrolling to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1); // Load the next page
      }
    });

    if (loader.current) {
      observer.observe(loader.current); // Observe the loader div
    }

    return () => {
      if (loader.current) observer.unobserve(loader.current); // Cleanup observer
    };
  }, [hasMore]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="sticky top-0 bg-[#235A91] text-white p-4 z-10">
        <h1 className="text-xl">Ideas App</h1>
      </header>
      <div className="sticky top-0 bg-gray-100 p-4 z-10">
        <Chatbot />
      </div>
      <main className="flex-grow overflow-y-auto p-6">
        <IdeasList ideas={ideas} />
        <div ref={loader} className="text-center p-4">
          {hasMore ? 'Loading more ideas...' : 'No more ideas to load.'}
        </div>
      </main>
      <footer className="sticky bottom-0 bg-gray-100 p-4">
        <IdeaForm refreshIdeas={refreshIdeas} />
      </footer>
    </div>
  );
};

export default App;
