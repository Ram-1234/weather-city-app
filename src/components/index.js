import React,{useState,useEffect} from 'react';
import './index.css';
import Display from './Display';

export default function CityInput() {
  const APIKEY="c72f8345850369ff6163952be1550e6e";

    const [form,setForm]=useState({city:""});
    const [weather,setWeather]=useState([]);
    //console.log(search)


    async function weatherData(e){
      e.preventDefault();
      if(form.city===""){
        alert("add values")
      }else{
        const data= await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=metric&appid=${APIKEY}`
          ).then(res=> res.json())
          .then(data => data)
          setWeather({data:data});  
      }  
    }

    const handleChange=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      if(value==="city"){
        setForm({...form, city:value})
      }
   
   }
   

    // useEffect(()=>{
    //    fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
    //     ).then((res)=> res.json())
    //     .then(search=>setSearchInput(search))
        
    // },[])


  

    return ( 
      <>
      <div className="input-title">
        <input className="inputfield" type="text" placeholder='search city' name="city" onChange={e=>handleChange(e)} />
        <button onClick={(e)=>weatherData(e)}>search</button> 
      </div>
      {/* <Display /> */}
      {
        weather.data !=undefined ?
         null
        :  
        <div>
        <Display data={weather.data} />
      </div>   
    }
    </>
    )
}
