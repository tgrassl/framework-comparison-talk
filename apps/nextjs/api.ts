const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path: string) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default function fetchAPI(path: string) {
  const url = path.startsWith('user') ? user(path) : story(path);
  const headers = { 'User-Agent': 'chrome' };
  // console.log({ url });

  return fetch(url, { headers })
    .then((r) => {
      // console.log(r);
      return r.json();
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}
