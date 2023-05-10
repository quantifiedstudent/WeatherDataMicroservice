export default interface DailyWeatherHistoricalDTO {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnitsHistoricalDTO;
  daily: DailyDataHistoricalDTO;
}

export interface DailyUnitsHistoricalDTO {
  time: string;
  temperature_2m_mean: string;
  sunrise: string;
  sunset: string;
  precipitation_sum: string;
  rain_sum: string;
  snowfall_sum: string;
  windspeed_10m_max: string;
}

export interface DailyDataHistoricalDTO {
  time: string[];
  temperature_2m_mean: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_sum: number[];
  rain_sum: number[];
  snowfall_sum: number[];
  windspeed_10m_max: number[];
}
