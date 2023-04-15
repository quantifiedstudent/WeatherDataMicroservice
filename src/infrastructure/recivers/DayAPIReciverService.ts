import BaseWeatherReciverService from "./BaseWeatherReciverService";
import DailyWeatherDTO from "../dto/DailyWeatherDTO";
import { DailyWeather } from "../../domain/models/DailyWeather";
import { IDailyWeatherAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IDailyWeatherAPIReciverService";
import * as fs from "fs";
import fetch from "node-fetch";

export default class DayAPIReciverService extends BaseWeatherReciverService implements IDailyWeatherAPIReciverService{
  apiRoute = (startDate: Date, endDate: Date) =>
    `/stations/daily?station=06370&start=${startDate.toISOString().split('T')[0]}&end=${endDate.toISOString().split('T')[0]}`;

  constructor() {
    super();
  }

  async GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeatherDTO> {
    // Rapid API login
    // Login: quantifiedstudent@op.pl
    // Pass: zaq1@WSX
    // Onet Email
    // Login: quantifiedstudent@op.pl
    // Pass: zaq1@WSX

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fb2760110cmsh2c9450db31a4689p1f1eacjsn37a7c6f10741",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
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
