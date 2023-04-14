export default interface DailyWeatherDTO {
  meta: {
    generated: string;
  };
  data: WeatherData[];
}

interface WeatherData {
  date: string;
  tavg: number;
  tmin: number;
  tmax: number;
  prcp: number;
  snow: null | number;
  wdir: number;
  wspd: number;
  wpgt: number;
  pres: number;
  tsun: null | number;
}