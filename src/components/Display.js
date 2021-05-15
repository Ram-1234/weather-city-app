import React,{useState} from 'react';
import './styles.css';

export default function Display(props) {
  console.log(props);
  const [time,setTime]=useState();

  function  updates(){
    const t=new Date();
    const d=t.toLocaleString('en-US');
    setTime(d);
  }
  setInterval(updates,1000);
  

    return ( 
    <>
    <div className="mainapp">
      <div className="location">
       <h2 ><i className="fas fa-street-view"></i>delhi</h2>
      </div>
      <div className="temp">
        <h2>50°C</h2>
      </div>
      {/* <div>Min :{search.main.temp_min}°C | Max :{search.main.temp_max}°C</div> */}
      {/* <div>Humidity: {search.main.humidity}</div> */}
      {/* <div>Presuure: {search.main.presuure}</div> */}
      <div className="info">
        <p>{time}</p>
        <p>@ramnayan1096</p>
      </div>
     
    </div>
    </>
    )
}
