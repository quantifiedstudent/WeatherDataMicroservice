import BaseWeatherReciverService from "./BaseWeatherReciverService";
import DailyWeatherDTO from "../dto/DailyWeatherDTO";
import { IDailyWeatherAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IDailyWeatherAPIReciverService";
import * as fs from "fs";
import fetch from "node-fetch";

export default class DayAPIReciverService extends BaseWeatherReciverService implements IDailyWeatherAPIReciverService{
  apiRoute = (startDate: Date, endDate: Date) =>
    `archive?latitude=51.44&longitude=5.48&start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}&daily=temperature_2m_mean,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max&timezone=Europe%2FBerlin`;
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max&timezone=Europe%2FBerlin
  // https://open-meteo.com/en/docs#latitude=51.44&longitude=5.48&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max&timezone=Europe%2FBerlin

  constructor() {
    super();
  }

  async GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeatherDTO> {
    // Open-Meteo
    const options = {
      method: "GET",
    };

    try {
      // Reading weather form JSON file
      // const response = fs.readFileSync("./src/weather2023.json", "utf-8");
      // const data = <DailyWeatherDTO> JSON.parse(response);
      // Real API
      const response = await fetch(this.url + this.apiRoute(startDate, endDate), options);
      const data = <DailyWeatherDTO> await response.json();
      // console.log(data)
      // console.log(startDate, endDate)
      // console.log(this.url + this.apiRoute(startDate, endDate));
      return data;
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
