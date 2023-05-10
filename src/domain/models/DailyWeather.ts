import DailyWeatherForecastDTO, { DailyDataForecastDTO } from "../../infrastructure/dto/DailyWeatherForecastDTO";
import DailyWeatherHistoricalDTO, { DailyDataHistoricalDTO, DailyUnitsHistoricalDTO } from "../../infrastructure/dto/DailyWeatherHistoricalDTO";

export default class DailyWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: DailyData;

  constructor(dailyWeatherHistoricalDTO: DailyWeatherHistoricalDTO, dailyWeatherForecastDTO: DailyWeatherForecastDTO | null) {
    this.latitude = dailyWeatherHistoricalDTO.latitude;
    this.longitude = dailyWeatherHistoricalDTO.longitude;
    this.generationtime_ms = dailyWeatherHistoricalDTO.generationtime_ms;
    this.utc_offset_seconds = dailyWeatherHistoricalDTO.utc_offset_seconds;
    this.timezone = dailyWeatherHistoricalDTO.timezone;
    this.timezone_abbreviation = dailyWeatherHistoricalDTO.timezone_abbreviation;
    this.elevation = dailyWeatherHistoricalDTO.elevation;
    this.daily_units = new DailyUnits(dailyWeatherHistoricalDTO.daily_units);
    this.daily = new DailyData(dailyWeatherHistoricalDTO.daily);
    if (dailyWeatherForecastDTO != null)
    {
      this.daily.AddData(dailyWeatherForecastDTO.daily)
    }
  }
}
class DailyUnits {
  time: string;
  temperature_2m_mean: string;
  sunrise: string;
  sunset: string;
  precipitation_sum: string;
  rain_sum: string;
  snowfall_sum: string;
  windspeed_10m_max: string;

  constructor(data: DailyUnitsHistoricalDTO) {
    this.time = data.time;
    this.temperature_2m_mean = data.temperature_2m_mean;
    this.sunrise = data.sunrise;
    this.sunset = data.sunset;
    this.precipitation_sum = data.precipitation_sum;
    this.rain_sum = data.rain_sum;
    this.snowfall_sum = data.snowfall_sum;
    this.windspeed_10m_max = data.windspeed_10m_max;
  }
}

class DailyData {
  time: string[];
  temperature_2m_mean: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_sum: number[];
  rain_sum: number[];
  snowfall_sum: number[];
  windspeed_10m_max: number[];

  constructor(data: DailyDataHistoricalDTO) {
    this.time = data.time;
    this.temperature_2m_mean = data.temperature_2m_mean;
    this.sunrise = data.sunrise;
    this.sunset = data.sunset;
    this.precipitation_sum = data.precipitation_sum;
    this.rain_sum = data.rain_sum;
    this.snowfall_sum = data.snowfall_sum;
    this.windspeed_10m_max = data.windspeed_10m_max;
  }

  AddData(dailyWeatherForecastDTO: DailyDataForecastDTO)
  {
    this.time = this.time.concat(dailyWeatherForecastDTO.time);

    let dailyWeatherForecastTemperature_2m_mean: number[] = [];
    if(dailyWeatherForecastDTO.temperature_2m_min.length != dailyWeatherForecastDTO.temperature_2m_max.length)
    {
      throw Error('Temperature arrays from Forecast have different size!');
    }
    for (let i = 0; i < dailyWeatherForecastDTO.temperature_2m_min.length; i++)
    {
      dailyWeatherForecastTemperature_2m_mean.push((dailyWeatherForecastDTO.temperature_2m_min[i] + dailyWeatherForecastDTO.temperature_2m_max[i])/2)
    }

    this.temperature_2m_mean = this.temperature_2m_mean.concat(dailyWeatherForecastTemperature_2m_mean);
    this.sunrise = this.sunrise.concat(dailyWeatherForecastDTO.sunrise);
    this.sunset = this.sunset.concat(dailyWeatherForecastDTO.sunset);
    this.precipitation_sum = this.precipitation_sum.concat(dailyWeatherForecastDTO.precipitation_sum);
    this.rain_sum = this.rain_sum.concat(dailyWeatherForecastDTO.rain_sum);
    this.snowfall_sum = this.snowfall_sum.concat(dailyWeatherForecastDTO.snowfall_sum);
    this.windspeed_10m_max = this.windspeed_10m_max.concat(dailyWeatherForecastDTO.windspeed_10m_max);
  }
}