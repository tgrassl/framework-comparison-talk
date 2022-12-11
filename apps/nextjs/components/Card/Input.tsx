'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Input = () => {
  const [query, setQuery] = useState('');
  const { push } = useRouter();

  return (
    <div className='container'>
      <input type="text" id="search" onChange={(e) => setQuery(e.target.value)} value={query} />
      <button type='submit' className='button' onClick={() => push(`/details/${query}`)}>Search</button>
    </div>
  );
};
