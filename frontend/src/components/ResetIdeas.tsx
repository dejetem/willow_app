import React, { useState } from 'react';
import { resetIdeas } from '../api';

interface ResetIdeasProps {
  refreshIdeas: () => void;  // Declare refreshIdeas as a prop
}

const ResetIdeas: React.FC<ResetIdeasProps> = ({ refreshIdeas }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    const result = await resetIdeas();
    if (result.success) {
      setMessage('Ideas reset successfully.');
      setLoading(false);
      refreshIdeas();  // Trigger the refresh of the ideas list
    } else {
      setMessage('Failed to reset ideas.');
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <button
        disabled={loading}
        onClick={handleReset}
        className="bg-[#235A91] text-white p-2 rounded mt-2"
      >
        {loading ? 'Loading...' : 'Reset Ideas'}
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default ResetIdeas;