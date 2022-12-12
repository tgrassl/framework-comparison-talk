import { fetchMainCities } from 'shared';
import { HomePageContent } from '../components/HomePageContent';

export default async function Home() {
  const cityData = await fetchMainCities();

  return <HomePageContent cityData={cityData} />;
}
