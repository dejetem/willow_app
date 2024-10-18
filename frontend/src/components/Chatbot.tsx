import React, { useState } from 'react';
import { getBotResponse } from '../api';

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await getBotResponse(message);
    setResponse(result.data);
    setMessage('');
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask the bot for idea..."
        />
        <button disabled={loading} type="submit" className="bg-[#235A91] text-white p-2 rounded mt-2">
          {loading ? 'Loading...' : 'Ask Bot'}
        </button>
      </form>
      {response && <p className="mt-2 text-blue-500">{response}</p>}
    </div>
  );
};

export default Chatbot;
