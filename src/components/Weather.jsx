import React, { useState, useEffect } from 'react';

function Weather(props) {
    const API_KEY = '7f178d701cd65cd6a48b05f0cb18d957';
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
     
//   Get weather
    useEffect(() => {
        async function getWeather() {

        // Get geolocation. (look in the Geolocation API documentation https://w3c.github.io/geolocation-api/)
        navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
          
        setLoading(true);
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=units`
          )
            .then((res) => {
              console.log('in res', res);
              return res.json();
            })
            .then((data) => {
              console.log('in data', data);
              setLoading(false)
              setWeather(data.main);
            })
            .catch((err) => {
              console.log('in err', err);
              setLoading(false);
              setErr(err);
            });
        });
    }
        // Gets API result
        getWeather();
},[]);

      // Return temperature from API
      let temp = weather.temp
      for(let key in temp) {
        if(key.includes('temp')) temp = temp[key]
      }

      // Convert Kelvit to Celcius degrees, the formula is K − 273.15 = °C
      temp = Math.floor(temp - 273.15) + '°C'
    
    return (
      <h3 className="temperature-desk mb-3">Current temperature is: {temp}</h3>
    )
}

export default Weather
