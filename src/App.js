import React, {useState} from 'react'
import './App.css'


function App() {
  
  const apiKey = '36ce0ef501b30cd1e708c1d047410025'

  const [weatherData, setWeatherData] = useState([{}])

  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    } 
  }

  return (
  <div className='background-color'> 
    <div className="container">
      <input 
      className="input" 
      placeholder="Enter city..."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome! Enter a city for current weather data. </p>
        </div>
      ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found</p>
      ) : (
        <>
        </>
      )}


    </div>
    </div>   
  )
}

export default App
