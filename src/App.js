import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/card";

function App() {
  const dateOptions = {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const dateAsFormattedString = dateFormatter.format(new Date());

  const current_date = dateAsFormattedString;
  const [val, setVal] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: "_",
    temp_max: "",
    temp_min: "",
    humidity: "",
    wind: "",
    pressure: "",
    country: "",
  });
  const getWeatherByCordinates = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log(position.coords.latitude);
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=da9d79f0304b0a345bbfa7b59e0c5fd5`
          );
          const data = await res.json();
          console.log(data);
          const date = new Date(data.dt * 1000);
          setData({
            description: data.weather[0].description,
            temp: data.main.temp.toFixed(1) + "°C",
            temp_min: data.main.temp_min.toFixed(1) + "°C",
            temp_max: data.main.temp_max.toFixed(1) + "°C",
            pressure: `${data.main.pressure} hPa`,
            humidity: data.main.humidity + "%",
            wind: data.wind.speed + " " + "km/h",
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            country: data.sys.country,
            city: `${val}`,
            icon: data.weather[0].icon,
            date: `${date.toLocaleDateString("en-US", {
              weekday: "long",
            })}, ${date.toLocaleDateString("en-US", {
              month: "long",
            })}  ${date.getDate()} ${date.getFullYear()}`,
          });
        },
        (error) => {
          window.alert("Can't fetch your location. Please enter city name.");
        }
      );
    } else {
      window.alert("Geo Location is not supported by browser");
    }
  };
  useEffect(() => {
    getWeatherByCordinates();
  }, []);
  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=da9d79f0304b0a345bbfa7b59e0c5fd5`
      )
      .then((res) => {
        console.log(res.data);
        setData({
          description: res.data.weather[0].description,
          temp: res.data.main.temp.toFixed(1) + "°C",
          temp_min: res.data.main.temp_min.toFixed(1) + "°C",
          temp_max: res.data.main.temp_max.toFixed(1) + "°C",
          pressure: `${res.data.main.pressure} hPa`,
          humidity: res.data.main.humidity + "%",
          wind: res.data.wind.speed + " " + "km/h",
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          country: res.data.sys.country,
          city: `${val}`,
          icon: res.data.weather[0].icon,
          date: `${current_date}`,
        });
      });
  };
  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Enter city name"
          className="form-control"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          Forecast
        </button>
      </div>
      <Card
        date={data}
        city={data}
        temp={data}
        icon={data}
        desc={data}
        temp_max={data}
        temp_min={data}
        humidity={data}
        wind={data}
        pressure={data}
      />
    </div>
  );
}

export default App;
