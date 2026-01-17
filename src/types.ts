export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface DayWeather {
  day:string;
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
}

export interface CurrentWeather {
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  sunrise: string;
  sunset: string;
  daily_will_it_rain: number;
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: DayWeather[];
}
