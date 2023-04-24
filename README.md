# WeatherDataMicroservice

## Get daily weather
>Gets daily weather in Eindhoven for specified period of time.

`http://localhost:7000/dailyWeather?startDate={startDate}&endDate={endDate}` - API Route

*startDate* - **Required**, specifies date of the first daily weather forecast
*endDate* - **Default is the date of sending request**, specifies date of the last daily weather forecast

| Parameter | Type | Description |
| ------------ | ------------ | ------------ |
| *startDate* **Required** | string | Specifies date of the first daily weather forecast. |
| *endDate* | string | Specifies date of the last daily weather forecast. Default is the date of sending request. |


>Example

`http://localhost:7000/dailyWeather?startDate=2022-04-07&endDate=2022-06-15` - Weather for time period between 2022-04-07 and 2022-06-15
`http://localhost:7000/dailyWeather?startDate=2022-06-07` - Weather for time period between 2022-06-07 and 2022-04-15 and date of sending request