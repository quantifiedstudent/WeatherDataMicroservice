export default class BaseWeatherAPIReciverService {
  url: string = "https://meteostat.p.rapidapi.com";
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}