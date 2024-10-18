import React, { useState } from 'react';
import { postIdea } from '../api';
import ResetIdeas from './ResetIdeas';

interface IdeaFormProps {
  refreshIdeas: () => void;  // Declare refreshIdeas as a prop
}

const IdeaForm: React.FC<IdeaFormProps> = ({ refreshIdeas }) => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await postIdea(content);
    if (result.success) {
      setMessage('Idea posted successfully!');
      setContent('');  // Reset form
      setLoading(false);
      refreshIdeas();  // Trigger the refresh of the ideas list
    } else {
      setMessage('Failed to post idea.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your idea"
      />
      <div className="flex justify-between">
        <button disabled={loading || content.length <= 3} type="submit" className="bg-[#235A91] text-white px-2 rounded mt-2">
          {loading ? 'Loading...' : 'Submit Idea'}
        </button>
        <ResetIdeas refreshIdeas={refreshIdeas} />
      </div>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </form>
  );
};

export default IdeaForm;
