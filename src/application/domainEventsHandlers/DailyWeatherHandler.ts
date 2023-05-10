import { IDailyWeatherAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IDailyWeatherAPIReciverService";
import { IDailyWeatherHandler } from "../../domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";
import DailyWeather from "../../domain/models/DailyWeather";
import DayAPIReciverService from "../../infrastructure/recivers/DayAPIReciverService";

export default class DailyWeatherHandler implements IDailyWeatherHandler {
  dailyWeatherAPIReciverService: IDailyWeatherAPIReciverService;

  constructor() {
    this.dailyWeatherAPIReciverService = new DayAPIReciverService();
  }

  async GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeather> {
    try {
      let dailyWeatherHistoricalDTO;
      let dailyWeatherForecastDTO;
      if (getDateDifferenceInDays(endDate,new Date()) <= 5)
      {
        dailyWeatherHistoricalDTO =
          await this.dailyWeatherAPIReciverService.GetDailyWeatherHistorical(
            startDate,
            subtractDaysFromDate(new Date(), 5)
          );
        dailyWeatherForecastDTO =
          await this.dailyWeatherAPIReciverService.GetDailyWeatherForecast(
            subtractDaysFromDate(new Date(), 5),
            endDate
          );
      }
      else{
        dailyWeatherHistoricalDTO =
          await this.dailyWeatherAPIReciverService.GetDailyWeatherHistorical(
            startDate,
            endDate
          );
        dailyWeatherForecastDTO = null
      }
      const dailyWeather = new DailyWeather(dailyWeatherHistoricalDTO, dailyWeatherForecastDTO);
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

function getDateDifferenceInDays(date1: Date, date2: Date): number {
  const timeDifference = date2.getTime() - date1.getTime();
  const dayInMilliseconds = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
  let dayDifference;
  if(timeDifference > 0)
  {
    dayDifference = Math.floor(timeDifference / dayInMilliseconds);
  }
  else{
    dayDifference = Math.ceil(timeDifference / dayInMilliseconds);
  }
  return dayDifference;
}

function subtractDaysFromDate(date: Date, days: number): Date {
  const result = new Date(date); // Create a new Date object to avoid modifying the original date
  result.setDate(result.getDate() - days); // Subtract the specified number of days
  return result;
}