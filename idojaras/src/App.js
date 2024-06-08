import "./styles.css"
import React, {useState} from "react"
import Varosurlap from "./Components/Varosurlap"
import Elorejelzes from "./Components/Elorejelzes";

export default function App() {
  const [idojarasInfo, setidojarasInfo] = useState(null)

  function queryWeather(varos){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.latitude}&longitude=${varos.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant`)
    .then(x => x.json())
    .then(response =>{
      setidojarasInfo({
        varos,
        idojaras: response
      })

    })
  }
  function updateVaros(varos){
    fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=" + varos)
      .then(x => x.json())
      .then(response => {
        if (Array.isArray(response.results) && response.results.length > 0){
          queryWeather(response.results[0])
        } else {
          alert("Hibás város!")
        }
      })
  }
  return (
    <div className="App">
      <h1>Időjárás előrejelzés</h1>
      <Varosurlap updateVaros={updateVaros}/>
      <Elorejelzes idojarasInfo={idojarasInfo}/>
    </div>
  );
}

//export default App;
