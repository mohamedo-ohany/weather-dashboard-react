import type { WeatherData, DayWeather } from "../../types";
import ForecastCom from "../ForecastCom";

interface ForecastListProps {
  weatherData: WeatherData;
}

export default function ForecastList({ weatherData }: ForecastListProps) {
  return (
    <section className="mt-6" aria-label="Forecast">
      <ul className="flex items-center overflow-x-auto sm:overflow-visible gap-3 w-full p-0 m-0 list-none pb-2 sm:justify-between">
        {weatherData?.forecast.map((day, index) => (
          <ForecastCom key={index} day={day as DayWeather} />
        ))}
      </ul>
    </section>
  );
}
