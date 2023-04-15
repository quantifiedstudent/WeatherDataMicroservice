import { IDailyWeatherAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IDailyWeatherAPIReciverService";
import { IDailyWeatherHandler } from "../../domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";
import { DailyWeather } from "../../domain/models/DailyWeather";
import DayAPIReciverService from "../../infrastructure/recivers/DayAPIReciverService";

export default class DailyWeatherHandler implements IDailyWeatherHandler {
  dailyWeatherAPIReciverService: IDailyWeatherAPIReciverService;

  constructor() {
    this.dailyWeatherAPIReciverService = new DayAPIReciverService();
  }

  async GetDailyWeather(
    startDate: Date,
    endDate: Date
  ): Promise<DailyWeather[]> {
    try {
      const dailyWeatherDTO =
        await this.dailyWeatherAPIReciverService.GetDailyWeather(
          startDate,
          endDate
        );
      let dailyWeather: DailyWeather[] = [];

      for (let day of dailyWeatherDTO.data) {
        dailyWeather.push(new DailyWeather(day));
      }

      return dailyWeather;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
      return Promise.reject(error);
    }
  }
}
