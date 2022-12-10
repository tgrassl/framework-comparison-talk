import { getWeather } from 'shared';

export default async function Details({ params }: any) {
  const weatherData = await getWeather(params.city);
  return (
    <div>
      <div>Details for city</div>
      <code>
        {JSON.stringify(weatherData, null, 4)}
      </code>
    </div>)
}