import type { DayWeather } from "../types";

interface ForecastComProps {
  day: DayWeather;
}

export default function ForecastCom({ day }: ForecastComProps) {
  return (
    <li className=" bg-white/10 rounded-2xl p-4 mb-2 flex flex-col justify-center shrink-0 text-base text-center items-center gap-2 w-20 max-h-full">
      <h3>{day.day}</h3>
      <img src={day.condition.icon} alt={day.condition.text} />
      <span className="font-bold">{day.maxtemp_c}°</span>
      <span className="font-bold">{day.mintemp_c}°</span>
    </li>
  );
}
