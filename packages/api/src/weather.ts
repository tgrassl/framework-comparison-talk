import { WeatherResponse } from "./weather.model";

export const API_KEY = "08dfeddb4569409ebb4170456221012";

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  return res.json();
};
