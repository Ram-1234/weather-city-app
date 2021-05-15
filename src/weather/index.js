import React,{useState} from 'react';
import './index.css';

const api={
    key:"c72f8345850369ff6163952be1550e6e",
    base:"https://api.openweathermap.org/data/2.5/"
}

export default function Index() {

  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});

  const search=evt=>{
      if(evt.key==="Enter"){
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res=>res.json())
          .then(result=>{
              setWeather(result)
              console.log(result);
              setQuery('');
          });
      }
  }
     



    let [time,setTime]=useState(null);

    function Timeset(){
        let d=new Date();
        let newtime=d.toLocaleTimeString('en-US');
        setTime(newtime);
    }
    setInterval(Timeset,1000);

const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","friday",
    "Saturday"]

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
} 

    return (
        <div className={(typeof weather.main !="undefined") ?
        ((weather.main.temp>16)) ? 'app warm' : 'app':'app'}> 
        {/* <h1 style={{color:"white"}}>Weather App</h1> */}
            <main>
                <div className="search-box">
                  <input
                   type="text"
                   className="search-bar"
                   placeholder="Search city...."
                   onChange={e=>setQuery(e.target.value)}
                   value={query}
                   onKeyPress={search}
                   />
                </div>
                {(typeof weather.main !="undefined")?(
                <div>
                    <div className="location-bax">
                   <div className="location">{weather.name}, {weather.sys.country}</div>
                   <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.main.temp)}°c
                    </div>
                    <div className="minmaxtemp">Min: {Math.round(weather.main.temp_min)}°c || Max: {Math.round(weather.main.temp_max)}°c</div>
                    <div className="weather">{weather.weather[0].main}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="creater">@ramnayan699</div>
                </div>
                ): ('')}
            </main>
        </div>
    );
}
