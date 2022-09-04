const API_KEY = `e1d1a2105c0be315577bf664a34ef3b7`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))
    .catch((error) => console.log(error));
};

const displayTemperature = (temperature) => {
  // console.log(temperature);
  // document.getElementById("city-name").innerText = temperature.name;
  // document.getElementById("temp").innerText = temperature.main.temp;
  // document.getElementById("condition").innerText = temperature.weather[0].main;
  setInnerTextById("city-name", temperature.name);
  setInnerTextById("temp", temperature.main.temp);
  setInnerTextById("condition", temperature.weather[0].main);
};

const setInnerTextById = (id, text) => {
  document.getElementById(id).innerText = text;
};

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("search-field").value;
  loadTemperature(city);
});
