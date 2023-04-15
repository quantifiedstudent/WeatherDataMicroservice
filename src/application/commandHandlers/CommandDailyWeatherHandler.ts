import { IDailyWeatherHandler } from "../../domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";
import { DailyWeather } from "../../domain/models/DailyWeather";
import DailyWeatherHandler from "../domainEventsHandlers/DailyWeatherHandler";

export default class CommandDailyWeatherHandler {
  dayHandler: IDailyWeatherHandler;

  constructor() {
    this.dayHandler = new DailyWeatherHandler();
  }

  async GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeather[]> {
    try {
      return await this.dayHandler.GetDailyWeather(startDate, endDate);
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
