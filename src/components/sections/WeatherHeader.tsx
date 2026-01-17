import { FiSunrise } from "react-icons/fi";
import { LuSunset } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import CardCom from "../CardCom";
import type { WeatherData } from "../../types";

interface WeatherHeaderProps {
  weatherData: WeatherData;
  lang: "ar" | "en";
}

export default function WeatherHeader({ weatherData, lang }: WeatherHeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="bg-white/10 rounded-2xl p-4 mb-4 flex flex-col justify-between text-xs text-center mb-8">
      <section
        aria-label="Weather details"
        className=" rounded-2xl items-center p-4 mb-4 flex justify-between text-xs"
      >
        <div className="w-20 h-20 flex items-center justify-center flex-1">
          <img
            className="flex-1 "
            src={weatherData.current.condition.icon}
            alt="Weather icon"
          />
        </div>
        <div className=" max-w-40 text-center">
          <time className="text-sm opacity-80">
            {new Date().toLocaleDateString(lang, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h2 className="text-2xl font-semibold mt-1">
            {`${weatherData.current.condition.text} ${weatherData.current.temp_c}°C`}
          </h2>
          <address className="text-xs opacity-70 not-italic">
            {t("Cairo, Egypt")}
          </address>
        </div>
      </section>
      <CardCom>
        <div className="text-xl font-bold flex items-center gap-2">
          <FiSunrise />
          <h3 className="text-base">
            {lang === "ar"
              ? weatherData.current.sunrise.replace("AM", "ص")
              : weatherData.current.sunrise}
          </h3>
        </div>
        <div className="text-xl font-bold flex items-center gap-2">
          <h3 className="text-base">
            {lang === "ar"
              ? weatherData.current.sunset.replace("PM", "م")
              : weatherData.current.sunset}
          </h3>
          <LuSunset />
        </div>
      </CardCom>
    </header>
  );
}
