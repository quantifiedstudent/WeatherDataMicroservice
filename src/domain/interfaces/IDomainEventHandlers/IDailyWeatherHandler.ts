import { DailyWeather } from "../../models/DailyWeather";

export interface IDailyWeatherHandler {
    GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeather[]>;
}