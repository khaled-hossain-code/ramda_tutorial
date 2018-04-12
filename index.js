const cities = require('./list1.json');
const R = require('ramda');

const kToC = (kelvin) => Math.round(kelvin - 273.15)

const updateTemperature = (city) => {
  const temp = kToC(city.temp);
  return R.merge(city, { temp });
}

const updatedCities = cities.map(updateTemperature);

console.log(updatedCities);