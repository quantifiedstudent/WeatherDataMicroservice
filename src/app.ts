import express from "express";
import DailyWeatherHandler from "./application/domainEventsHandlers/DailyWeatherHandler";
import { IDailyWeatherHandler } from "./domain/interfaces/IDomainEventHandlers/IDailyWeatherHandler";
import DailyWeather from "./domain/models/DailyWeather";

// manual.GetDailyWeather();

const dailyWeatherHandler: IDailyWeatherHandler = new DailyWeatherHandler();

const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7001;

// Middleware that parses body to JSON format
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to the website");
});

app.get("/dailyWeather", async (req, res) => {
  let startDate = <string>req.query.startDate;
  let endDate = <string>req.query.endDate;

  // console.log(startDate, endDate)
  // Check if both dates are correct
  if (validateDate(startDate) && validateDate(endDate)) {
    const weather = await fetchDailyWeather(new Date(startDate), new Date(endDate));
    return res.status(200).send(weather);
  }
  // Check if first date is correct and second is not specified
  else if (validateDate(startDate) && typeof endDate === "undefined") {
    const weather = await fetchDailyWeather(new Date(startDate), new Date());
    return res.status(200).send(weather);
  } 
  // Else return Error
  else {
    return res.status(404).send("Wrong Dates.");
  }
});

async function fetchDailyWeather(
  startDate: Date,
  endDate: Date
): Promise<DailyWeather> {
  try {
    const weather = await dailyWeatherHandler.GetDailyWeather(
      new Date(startDate),
      new Date(endDate)
    );
    return weather;
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

const validateDate = (date: string) => {
  if (typeof date !== "string") {
    return false;
  }
  if (date.length != 10) {
    return false;
  }
  return true;
};

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
