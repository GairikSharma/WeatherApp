import React from "react";
import "../styles/card.css";
import { WiHumidity } from "react-icons/wi";
import { WiCloudyWindy } from "react-icons/wi";
import { LuGauge } from "react-icons/lu";

function Card({
  date,
  city,
  temp,
  icon,
  desc,
  temp_max,
  temp_min,
  humidity,
  wind,
  pressure,
}) {
  const url = `https://openweathermap.org/img/wn/${icon.icon}.png`;
  console.log(url);
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="upper-portion">
            <div className="upper-left">
              <span>{city.city}</span>
              <div className="date">{date.date}</div>
              <div className="temperature">{temp.temp}</div>
              <div className="description">{desc.description}</div>
              <img src={url} alt="" />
            </div>
            <div className="upper-right">
              <div className="upper-right-top">
                <div style={{ color: "white", fontWeight: "600" }}>Max</div>
                <p>{temp_max.temp_max}</p>
              </div>
              <div className="upper-right-bottom">
                <div style={{ color: "white", fontWeight: "600" }}>Min</div>
                <p>{temp_min.temp_min}</p>
              </div>
            </div>
          </div>

          <div className="lower-portion">
            <div className="details">Weather Details</div>
            <div className="attribute">
              <WiHumidity className="icons" />
              <div>Humidity</div>
              <p>
                {humidity.humidity}
              </p>
            </div>
            <div className="attribute">
              <WiCloudyWindy className="icons"/>
              <div>Wind</div>
              <p>
                {wind.wind}
              </p>
            </div>
            <div className="attribute">
              <LuGauge className="icons"/>
              <div>Pressure</div>
              <p>
                {pressure.pressure}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
