import React,{useContext} from 'react'
import "./CountryInfo.css"
import {ThemeContext} from "../context/ThemeContext"

const WeatherInfo = ({weatherData}) => {
  let theme=useContext(ThemeContext)

    console.log(weatherData);
    return (
          <div style={{background:theme.background2,color:theme.foreground}} className="weather-info">
          <h5 className="header-code">CAPITAL WEATHER REPORT</h5>
          {/* {weatherData.base} */}
          <p className="p-weather">
              <span className="title">Wind Speed: </span>
              {weatherData.wind.speed}
            </p>
            <p className="p-weather">
              <span className="title">Temperture: </span>
              {weatherData.main.temp}°C
            </p>
            <p className="p-weather">
              <span className="title">Humidity:</span>
              {weatherData.main.humidity}%
            </p>
            <p className="p-weather" >
              <span className="title">visibility:</span>
              {weatherData.visibility}
            </p>
          </div> 
    )
}
export default WeatherInfo
