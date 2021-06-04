import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import PageTemplate from "./components/PageTemplate";
import {FcGlobe} from "react-icons/fc"
import {FaMoon} from "react-icons/fa"
import {FaSun} from "react-icons/fa"
import CountryName from "./components/CountryName";
import CountryInfo from "./components/CountryInfo";
import {ThemeContext, themes} from "./context/ThemeContext"
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData=async ()=>{
      const countriesData = await fetchData()
      setCountries(countriesData)
    }
    getData()
  }, [])
  const fetchData = async ()=>{
    const response = await fetch("https://restcountries.eu/rest/v2/all")
  const Data = await response.json()
  return Data
  }

  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then((response) => response.json())
  //     .then((json) => setCountries(json));
  // }, []);
  console.log(countries);
const [countryInfo, setCountryInfo] = useState(null)
const showInfo=(obj)=>{
  setCountryInfo(obj)
  // console.log(countryInfo);
 
}
// console.log(countryInfo.capital);
const [weather, setWeather] = useState(null)
  useEffect(() => {
    if (countryInfo) {
      const getData=async ()=>{
        const weatherData = await fetchDataWeather()
        setWeather(weatherData)
      }
      getData()
    }
  
  }, [countryInfo])
  const fetchDataWeather = async ()=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryInfo.capital}&units=metric&appid=acbc68009f076e8d34f005dde129fd20`)
  const Data = await response.json()
  return Data
  }
  const handleBack=()=>{
    setCountryInfo(null)
  }
  /*
  * theme dark & light
  */
 const [theme, setTheme] = useState(themes.light)
 const toggleTheme = ()=>{
   setTheme(theme === themes.dark ? themes.light : themes.dark)
 }
// const [weather, setWeather] = useState(null)
// useEffect(() => {
//   if (countryInfo) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryInfo.capital}&appid=acbc68009f076e8d34f005dde129fd20`)
//       .then((response) => response.json())
//       .then((json) => setWeather(json));
//   }
// }, [countryInfo])
// console.log(weather);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
      <header style={{background: theme.background,color:theme.foreground}} className="header">
        <div className="header-title">
          <FcGlobe className="globe"/>
        <h3 className="p-title">Rest countries App and Weather</h3>
        </div>
        <div onClick={toggleTheme}  className="header-title">
         {theme === themes.dark ? <FaSun/> : <FaMoon className="dark-mode globe"/>}
        <h3 className="p-title">{theme === themes.dark ? "Light" : "Dark"} Mode</h3>
        </div>
        
      </header>
      <PageTemplate onClick={showInfo} data={countries}>
        <div className="row-country" style={{background: theme.background}} >
          {/* <h4>List of countries</h4> */}
          {countries.map((obj, item) => {
            return (
              <div className="card-country">
                <CountryName onClick={showInfo} country={obj} />
               </div>
            );
          })}
        </div>
        {countryInfo && <CountryInfo onClick={handleBack} info={countryInfo} weather={weather} />}
      </PageTemplate>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
