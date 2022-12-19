'use client';

import { ReactNode, useState } from 'react';

export default function Toggle({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  const handleClick = async () => {
    setOpen((o) => !o);
    const serverResponse = await (await fetch('/api/demo')).json();
    console.log({ serverResponse });
  };

  return (
    <>
      <div className={'toggle' + (open ? ' open' : '')}>
        <a onClick={handleClick}>{open ? '[-]' : '[+] comments collapsed'}</a>
      </div>
      <ul
        className="comment-children"
        style={{ display: open ? 'block' : 'none' }}
      >
        {children}
      </ul>
    </>
  );
}
