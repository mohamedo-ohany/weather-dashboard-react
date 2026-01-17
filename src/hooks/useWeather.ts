import { useEffect, useState } from "react";
import type { WeatherData, DayWeather } from "../types";

export const useWeather = (lang: "ar" | "en") => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date();
    const getNextDay = (daysToAdd: number) => {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + daysToAdd);
      return nextDate.toLocaleDateString(lang, { weekday: "long" });
    };

    const dayNames = [lang == "en" ? "Today" : "اليوم", getNextDay(1), getNextDay(2), getNextDay(3)];

    const controller = new AbortController();
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=cairo&days=4&aqi=no&alerts=no&lang=${lang}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        const forecastDays: DayWeather[] = data.forecast.forecastday.map(
          (day: any, index: number) => ({
            day: dayNames[index],
            maxtemp_c: Math.round(day.day.maxtemp_c),
            mintemp_c: Math.round(day.day.mintemp_c),
            condition: day.day.condition,
          })
        );

        const extractedData: WeatherData = {
          current: {
            temp_c: Math.round(data.current.temp_c),
            condition: {
              ...data.current.condition,
              icon: data.current.condition.icon.replace("64x64", "128x128"),
            },
            wind_kph: Math.round(data.current.wind_kph),
            humidity: Math.round(data.current.humidity),
            feelslike_c: Math.round(data.current.feelslike_c),
            daily_will_it_rain:
              data.forecast.forecastday[0].day.daily_will_it_rain,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
          },
          forecast: forecastDays,
        };
        setData(extractedData);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error fetching weather data:", error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
    return () => {
      controller.abort();
    };
  }, [lang]);

  return { data, loading, error };
};
