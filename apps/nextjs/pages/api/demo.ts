import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  console.log('Hi from the server');
  res.send(JSON.stringify('Welcome to Next 13ish!'));
};
