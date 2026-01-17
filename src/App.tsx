import { useState, useEffect } from "react";
import "./input.css";
import CurrentWeather from "./components/sections/CurrentWeather";
import ForecastList from "./components/sections/ForecastList";
import { useWeather } from "./hooks/useWeather";
import { useTranslation } from "react-i18next";
import bgImage from "./assets/catherine-merlin-EYeRCpIIcqI-unsplash.jpg";

function App() {
  const [lang, setLang] = useState<"ar" | "en">("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const { data: weatherData, loading, error } = useWeather(lang);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        {t("loading")}
      </main>
    );
  }

  if (error || !weatherData) {
    return (
      <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        {t("error")}: {error || t("no_data_available")}
      </main>
    );
  }

  return (
    <>
      <main
        style={{ backgroundImage: `url(${bgImage})` }}
        className="
        min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-10"
      >
        <article className="w-11/12 max-w-[400px] min-h-[650px] p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl text-white flex flex-col justify-between">
          <CurrentWeather weatherData={weatherData} lang={lang} />
          <ForecastList weatherData={weatherData} />
          <button
            className="w-full py-3 mt-4 bg-white/20 hover:bg-white/30 active:scale-95 transition-all rounded-xl font-bold shadow-md cursor-pointer"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
          >
            {t("عربي")}
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
