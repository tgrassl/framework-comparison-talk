'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Input = () => {
  const [query, setQuery] = useState('');
  const { push } = useRouter();

  return (
    <div className="maxWidth">
      <input
        type="text"
        className="input"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button
        type="submit"
        className="button"
        onClick={() => push(`/details/${query}`)}
      >
        Search
      </button>
    </div>
  );
};
