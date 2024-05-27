const cities = ["madrid", "vancouver", "mumbai", "new york"];

const concatCities = cities.reduce((result, city) => {
  return result + city;
}, "");

console.log(concatCities);

const nums = [1, 2, 3, 4, 5];

const sumNums = nums.reduce((prev, next) => {
  return prev + next;
}, 0);

console.log(sumNums);
