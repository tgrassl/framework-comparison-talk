const isServer = typeof window === 'undefined';

const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path: string) => `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default async function fetchAPI<TReturn>(path: string): Promise<TReturn | null> {
	const url = path.startsWith('user') ? user(path) : story(path);
	const headers: HeadersInit = isServer ? { 'user-agent': 'chrome' } : {};

	try {
		return await (await fetch(url, { headers })).json();
	} catch (error) {
		console.log({ error });
		return null;
	}
}
