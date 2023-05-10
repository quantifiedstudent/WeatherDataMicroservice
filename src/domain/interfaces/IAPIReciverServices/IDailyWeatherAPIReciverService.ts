import DailyWeatherForecastDTO from "../../../infrastructure/dto/DailyWeatherForecastDTO";
import DailyWeatherHistoricalDTO from "../../../infrastructure/dto/DailyWeatherHistoricalDTO";

export interface IDailyWeatherAPIReciverService {
    GetDailyWeatherHistorical(startDate: Date, endDate: Date): Promise<DailyWeatherHistoricalDTO>;
    GetDailyWeatherForecast(startDate: Date, endDate: Date): Promise<DailyWeatherForecastDTO>;
}