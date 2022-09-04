const API_KEY = `e1d1a2105c0be315577bf664a34ef3b7`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))
    .catch((error) => console.log(error));
};

const displayTemperature = (temperature) => {
  console.log(temperature);
  const cityName = document.getElementById('city-name')
  cityName.innerText = temperature.name;
  document.getElementById('temp').innerText = temperature.main.temp;
};

loadTemperature("dhaka");
