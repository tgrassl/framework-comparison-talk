import type { GetStaticProps, NextPage } from "next";
import type { WeatherResponse } from "shared";
import { fetchMainCities } from "shared";
import { HomePageContent } from "../../components/HomePageContent";

interface HomePageProps {
  weatherData: WeatherResponse[];
}

export const HomePage: NextPage<HomePageProps> = ({
  weatherData,
}: HomePageProps): JSX.Element => {
  return <HomePageContent cityData={weatherData} />;
};

export const getStaticProps: GetStaticProps<{
  weatherData: WeatherResponse[];
}> = async () => {
  const weatherData = await fetchMainCities();

  return {
    props: {
      weatherData,
    },
  };
};
