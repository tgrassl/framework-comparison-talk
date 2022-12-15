const isServer = typeof window === 'undefined';

const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path: string) => `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default async function fetchAPI<TReturn>(path: string): Promise<TReturn> {
	const url = path.startsWith('user') ? user(path) : story(path);
	const headers: HeadersInit = isServer ? { 'user-agent': 'chrome' } : {};

	const r = await fetch(url, { headers });
	return r.json();
}
