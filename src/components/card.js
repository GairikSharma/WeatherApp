import React from 'react'
import '../styles/card.css'
import { Icon } from '@iconify/react';
import { WiHumidity } from 'react-icons/wi';
import {GiWindSlap} from 'react-icons/gi';
import {GiPressureCooker} from 'react-icons/gi'

function Card({ date, city, temp, icon, desc, temp_max, temp_min, humidity, wind, pressure }) {
  const url = `https://openweathermap.org/img/wn/${icon.icon}.png`
  console.log(url);
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="upper-portion">
            <div className="upper-left">
              <span>{city.city}</span>
              <p>{date.date}</p>
              <p>{temp.temp}</p>
              <p style={{textAlign:"center"}}>{desc.description}</p>
              <img src={url} alt="" />
              
            </div>
            <div className="upper-right">
              <div className="upper-right-top">
                <div style={{color:"white"}}>Max</div>
                <p>{temp_max.temp_max}</p>
                
              </div>
              <div className="upper-right-bottom">
                <div style={{color:"white"}}>Min</div>
                <p>{temp_min.temp_min}</p>
                
              </div>
            </div>
          </div>

          <div className="lower-portion">
            <div>
              <WiHumidity />
              <div>Humidity</div>
              <p style={{textAlign:"center", fontSize: "25px"}}>{humidity.humidity}</p>
              
            </div>
            <div>
              <GiWindSlap />
              <div>Wind</div>
              <p style={{textAlign:"center", fontSize: "25px"}}>{wind.wind}</p>
            </div>
            <div>
              <GiPressureCooker />
              <div>Pressure</div>
              <p style={{textAlign:"center", fontSize: "25px"}}>{pressure.pressure}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card