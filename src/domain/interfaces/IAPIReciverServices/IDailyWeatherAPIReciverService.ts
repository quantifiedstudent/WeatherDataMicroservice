import DailyWeatherDTO from "../../../infrastructure/dto/DailyWeatherDTO";

export interface IDailyWeatherAPIReciverService {
    GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeatherDTO>;
}