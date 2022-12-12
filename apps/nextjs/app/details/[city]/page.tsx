import { getWeather, TOP_CITIES } from 'shared';
import { Table } from '../../../components/Table';

export function generateStaticParams() {
  return TOP_CITIES.map((city) => ({
    city,
  }));
}

export default async function Details({ params }: any) {
  const weatherData = await getWeather(params.city);
  return <Table weatherData={weatherData}></Table>;
}
