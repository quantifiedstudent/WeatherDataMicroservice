import fetch from "node-fetch";
import BaseWeatherReciverService from "./BaseWeatherReciverService";

export default class WeekAPIReciver extends BaseWeatherReciverService {
    apiRoute = "/api/v1/courses";

    constructor(token: string) {
      super();
    }
}









