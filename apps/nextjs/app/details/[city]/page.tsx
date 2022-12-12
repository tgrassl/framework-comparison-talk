import { getWeather, TOP_CITIES } from 'shared';
import { Table } from '../../../components/Card/Table';

export function generateStaticParams() {
  return TOP_CITIES.map((city) => ({
    city,
  }));
}

export default async function Details({ params }: any) {
  const weatherData = await getWeather(params.city);
  return (
    <div className="centerOnScreen">
      <Table weatherData={weatherData}></Table>
    </div>
  );
}
