import { IoRainyOutline } from "react-icons/io5";
import CardCom from "../CardCom";
import type { WeatherData } from "../../types";
import { useTranslation } from "react-i18next";
import WeatherHeader from "./WeatherHeader";

interface CurrentWeatherProps {
  weatherData: WeatherData;
  lang: "ar" | "en";
}

export default function CurrentWeather({
  weatherData,
  lang,
}: CurrentWeatherProps) {
  const { t } = useTranslation();

  return (
    <>
      <WeatherHeader weatherData={weatherData} lang={lang} />
      <CardCom>
        <div className="text-xl w-full font-bold flex justify-center items-center gap-2">
          <IoRainyOutline />
          <h3 className="text-base">
            {weatherData ? `${weatherData.current.daily_will_it_rain} %` : ""}
          </h3>
        </div>
      </CardCom>
      <section
        aria-label="Additional weather details"
        className="  mb-4 flex justify-between text-xs"
      >
        <div>
          <span className="block opacity-70">{t("humidity")}</span>
          <span className="font-bold">{weatherData.current.humidity}%</span>
        </div>
        <div>
          <span className="block opacity-70">{t("wind_speed")}</span>
          <span className="font-bold">
            {weatherData.current.wind_kph} {t("km/h")}
          </span>
        </div>
      </section>
    </>
  );
}
