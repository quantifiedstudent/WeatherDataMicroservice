import ManualFetch from "./manualFetching";
import express from "express";
import Joi from "joi";
import DailyWeatherHandler from "./application/domainEventsHandlers/DailyWeatherHandler";
import { IDailyWeatherHandler } from "./domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";
import { resourceUsage } from "process";

// const manual: ManualFetch = new ManualFetch("a");

// manual.GetDailyWeather();

const dailyWeatherHandler: IDailyWeatherHandler = new DailyWeatherHandler();

// const weather = await dailyWeatherHandler.GetDailyWeather(
//   new Date("2023-01-01"),
//   new Date("2023-04-12")
// );

// console.log(weather);

const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the website");
});

app.get("/dailyWeather", async (req, res) => {
  let startDate = req.query.startDate;
  let endDate = req.query.endDate;

  // console.log(startDate, endDate)
  if(validateDate(startDate) && validateDate(endDate))
  {
    try {
      const weather = await dailyWeatherHandler.GetDailyWeather(
        new Date(<string>startDate),
        new Date(<string>endDate)
      );
      return res.status(200).send(weather);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
      return res.status(404).send("Wrong Dates.");
    }
  }
  else if(validateDate(startDate) && typeof(endDate) === 'undefined')
  {
    try {
      const weather = await dailyWeatherHandler.GetDailyWeather(
        new Date(<string>startDate),
        new Date()
      );
      return res.status(200).send(weather);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
      return res.status(404).send("Wrong Dates.");
    }
  }
  else{
    return res.status(404).send("Wrong Dates.");
  }
});

const validateDate = (date: unknown) => {
  if (typeof date !== 'string' && date instanceof String == false)
  {
    return false
  }
  if ((<string>date).length != 10)
  {
    return false;
  }
  return true;
};

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
