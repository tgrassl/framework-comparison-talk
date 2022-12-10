import { getWeather, TOP_CITIES } from 'shared';

export function generateStaticParams() {
  return TOP_CITIES.map((city) => ({
    city,
  }));
}

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