import DailyWeatherDTO from "../../infrastructure/dto/DailyWeatherDTO";

export class DailyWeather {
  public data: WeatherData[];

  constructor(dailyWeatherDTO: DailyWeatherDTO) {
    this.data = dailyWeatherDTO.data;
  }
}
