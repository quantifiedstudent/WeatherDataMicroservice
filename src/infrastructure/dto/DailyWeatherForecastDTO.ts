export default interface DailyWeatherForecastDTO {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnitsForecastDTO;
  daily: DailyDataForecastDTO;
}

export interface DailyUnitsForecastDTO {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  precipitation_sum: string;
  rain_sum: string;
  snowfall_sum: string;
  windspeed_10m_max: string;
}

export interface DailyDataForecastDTO {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_sum: number[];
  rain_sum: number[];
  snowfall_sum: number[];
  windspeed_10m_max: number[];
}
