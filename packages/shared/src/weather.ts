import type { WeatherResponse } from "./weather.model";

const API_KEY = "08dfeddb4569409ebb4170456221012";

export const TOP_CITIES = ["munich", "london", "tokyo"];

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
};

export const fetchMainCities = async () => {
  return Promise.all(
    TOP_CITIES.map(async (city) => {
      return getWeather(city);
    })
  );
};
