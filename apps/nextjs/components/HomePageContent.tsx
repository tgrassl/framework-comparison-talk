import Link from "next/link";
import { WeatherResponse } from "shared";
import { Card } from "./Card";
import { Input } from "./Input";

interface HomePageContentProps {
  cityData: WeatherResponse[];
}

export const HomePageContent = ({ cityData }: HomePageContentProps) => {
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
};
