const cities = ["madrid", "vancouver", "mumbai", "new york"];

const mCities = cities.filter((city) => {
  return city.startsWith("m");
});

console.log(mCities);

const lengCities = cities.filter((city) => city.length > 6);

console.log(lengCities);
