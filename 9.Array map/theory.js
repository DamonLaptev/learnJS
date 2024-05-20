const cities = ["london", "vancouver", "mumbai", "new york"];

const bigCities = cities.map((city) => {
  return city.toUpperCase();
});

console.log(bigCities);

const numbers = [5, 10, 15, 20, 25];

const timesTen = numbers.map((number) => {
  return number * 10;
});

console.log(timesTen);
