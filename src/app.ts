import ManualFetch from "./manualFetching";
import express from "express";
import DailyWeatherHandler from "./application/domainEventsHandlers/DailyWeatherHandler";
import { IDailyWeatherHandler } from "./domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";

// const manual: ManualFetch = new ManualFetch("a");

// manual.GetDailyWeather();

const dailyWeatherHandler: IDailyWeatherHandler = new DailyWeatherHandler();

const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the website");
});

app.get("/dailyWeather", async (req, res) => {
  let startDate = <string>req.query.startDate;
  let endDate = <string>req.query.endDate;

  // console.log(startDate, endDate)
  if(validateDate(startDate) && validateDate(endDate))
  {
    try {
      const weather = await dailyWeatherHandler.GetDailyWeather(
        new Date(startDate),
        new Date(endDate)
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
        new Date(startDate),
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

const validateDate = (date: string) => {
  if (typeof(date) !== 'string')
  {
    return false
  }
  if (date.length != 10)
  {
    return false;
  }
  return true;
};

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
