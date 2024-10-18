import React from 'react';

interface Idea {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface IdeasListProps {
  ideas: Idea[];
}

const IdeasList: React.FC<IdeasListProps> = ({ ideas }) => {
  return (
    <div className="container mx-auto p-6 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Ideas</h1>
      <ul className="space-y-4">
        {ideas.map((idea, index) => (
          <li key={`${idea.id}`} className="bg-white p-4 rounded shadow">
            <p>{idea.content}</p>
            <small className="text-gray-500">Created at: {new Date(idea.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      <div className="text-center p-4">
        {ideas.length > 0 ? '' : 'No ideas to display.'}
      </div>
    </div>
  );
};

export default IdeasList;
