const today = new Date();

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

const logWeatherDes = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}


logWeather(todayWeather);

const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];