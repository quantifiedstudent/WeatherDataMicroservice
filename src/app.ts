import fetch from "node-fetch";
import ManualFetch from "./manualFetching";

const manual: ManualFetch = new ManualFetch("a");

manual.GetDailyWeather();