import React,{useContext} from "react";
import "./CountryInfo.css"
import WeatherInfo from "./WeatherInfo";
import {ThemeContext} from "../context/ThemeContext"

const CountryInfo = ({ info,weather,onClick }) => {
  let theme=useContext(ThemeContext)

// const [weather, setWeather] = useState(null)

//   useEffect(() => {
    
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${info.capital}&appid=acbc68009f076e8d34f005dde129fd20`)
//         .then((response) => response.json())
//         .then((json) => setWeather(json));
   
//   }, [])
  // console.log(weather);
  return (
    <div className="modal">
      <div style={{background:theme.background,color:theme.foreground}} className="modal-body">
        <div className="row-up">
            <div className="img">
          <img className="max-flag" src={info.flag} />
          </div>
          <div style={{background:theme.background2,color:theme.foreground}}  className="info">
            <h4>{info.name}</h4>
            <p>
              <span className="title">Native Name:</span>
              {info.nativeName}
            </p>
            <p>
              <span className="title">Capital:</span>
              {info.capital}
            </p>
            <p>
              <span className="title">Region:</span>
              {info.region}
            </p>
            <p>
              <span className="title">Population:</span>
              {info.population}
            </p>
            <p>
              <span className="title">Languages:</span>
              {info.languages[0].name}
            </p>
            <p>
              <span className="title">Timezones:</span>
              {info.timezones[0].substr(0,10)}
            </p>
          </div>
        </div>
        <div  className="row-down">
          <div style={{background:theme.background2,color:theme.foreground}} className="code">
            <h5 className="header-code">CALLING CODE</h5>
            <p className="callingCode">{info.callingCodes}</p>
          </div>
          {weather && <WeatherInfo  weatherData={weather} />}
          
          
          {/* <div className="weather-info">
          <h5 className="header-code">CAPITAL WEATHER REPORT</h5>
          {weather.base}
          <p>
              <span className="title">Wind Speed: </span>
              {weather.wind.speed}
            </p>
            <p>
              <span className="title">Temperture: </span>
              {weather.capital}
            </p>
            <p>
              <span className="title">Sunrise:</span>
              {weather.region}
            </p>
            <p>
              <span className="title">visibility:</span>
              {weather.population}
            </p>
          </div> */}
        </div>
        <div onClick={onClick} ><button className="button" >Back to List Countries</button></div>
      </div>
    </div>
  );
};
export default CountryInfo;
