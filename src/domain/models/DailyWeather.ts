import DailyWeatherDTO, { WeatherDataDTO } from "../../infrastructure/dto/DailyWeatherDTO";

export class DailyWeather {
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

  constructor(weatherDataDTO: WeatherDataDTO) {
    this.date = weatherDataDTO.date;
    this.tavg = weatherDataDTO.tavg;
    this.tmin = weatherDataDTO.tmin;
    this.tmax = weatherDataDTO.tmax;
    this.prcp = weatherDataDTO.prcp;
    this.snow = weatherDataDTO.snow;
    this.wdir = weatherDataDTO.wdir;
    this.wspd = weatherDataDTO.wspd;
    this.wpgt = weatherDataDTO.wpgt;
    this.pres = weatherDataDTO.pres;
    this.tsun = weatherDataDTO.tsun;
  }
}
