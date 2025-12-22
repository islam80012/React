import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const city = 'London';



  useEffect(() => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APIKey=${API_KEY}&units=metric`)
   .then(res => res.json())
      .then(result => {
        setWeather({
          temp: Math.round(result.main.temp),
          desc: result.weather[0].description,
          icon: result.weather[0].icon
        })
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div className="loading">Fetching local weather...</div>
  }

  return (
    <div className="weather-card">
      <h2>London</h2>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt="Weather icon"
      />
      <div className="temp">{weather.temp}°C</div>
      <div className="desc">{weather.desc}</div>
    </div>
  )
}

export default App
