import fetch from "node-fetch";
import BaseWeatherReciverService from "./infrastructure/recivers/BaseWeatherReciverService";
import * as fs from "fs";

export default class ManualFetch extends BaseWeatherReciverService {
  // GET /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  url =
    "https://fhict.instructure.com/api/v1/courses/12886/assignments/216054/submissions/24412";
  constructor(token: string) {
    super();
  }

  async GetDailyWeather() {
    // Rapid API login
    // Login: quantifiedstudent@op.pl
    // Pass: zaq1@WSX
    // Onet Email
    // Login: quantifiedstudent@op.pl
    // Pass: zaq1@WSX

    const url =
      "https://meteostat.p.rapidapi.com/stations/daily?station=06370&start=2023-01-01&end=2023-04-12";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fb2760110cmsh2c9450db31a4689p1f1eacjsn37a7c6f10741",
        "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      // const data: Object = []
      const json = JSON.stringify(data);
      fs.writeFile("./src/weather2023.json", json, (err) => {
        if (err) console.log("Error writing file:", err);
      });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
    }
  }
}
