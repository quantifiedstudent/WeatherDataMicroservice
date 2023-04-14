import fetch from "node-fetch";
import ManualFetch from "./manualFetching";
import DayAPIReciverService from "./infrastructure/recivers/DayAPIReciverService";

const manual: ManualFetch = new ManualFetch("a");

// manual.GetDailyWeather();

const dayAPIReciverService: DayAPIReciverService = new DayAPIReciverService()

dayAPIReciverService.GetDailyWeather(new Date(2023, 0o0, 0o2), new Date(2023, 0O3, 13))