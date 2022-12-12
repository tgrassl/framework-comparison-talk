import Link from 'next/link';
import { getWeather, TOP_CITIES } from 'shared';
import { Card } from '../components/Card/Card';
import { Input } from '../components/Card/Input';

const fetchMainCities = async () => {
  return Promise.all(
    TOP_CITIES.map(async (city) => {
      return getWeather(city);
    })
  );
};

export default async function Home() {
  const cityData = await fetchMainCities();

  return (
    <>
      <div>
        <h1 className="title">AstralWeather</h1>
      </div>

      <div className="grid">
        <div className="row marginBottom">
          {cityData.map(
            ({
              current: {
                last_updated,
                condition: { icon },
              },
              location: { name },
            }) => (
              <Link href={`/details/${name.toLowerCase()}`} key={name}>
                <Card
                  title={name}
                  subtitle={new Date(
                    last_updated ?? Date.now()
                  ).toLocaleDateString()}
                  icon={icon}
                />
              </Link>
            )
          )}
        </div>
        <Input />
      </div>
    </>
  );
}
